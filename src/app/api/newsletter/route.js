import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
    }

    // Build standard nodemailer transporter using Environment Variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER || process.env.SMTP_USER,
        pass: process.env.EMAIL_PASS || process.env.SMTP_PASS,
      },
    });

    // Admin Email HTML
    const adminHtml = `
      <h2>New Newsletter Subscription!</h2>
      <p>A new user has subscribed to the newsletter on your website.</p>
      <h3>Subscriber Details</h3>
      <ul>
        <li><b>Email:</b> ${email}</li>
      </ul>
      <p>Date: ${new Date().toLocaleString()}</p>
    `;

    // Try sending (If ENV variables are missing, this might fail, so we catch nicely)
    try {
      const authUser = process.env.EMAIL_USER || process.env.SMTP_USER;
      const authPass = process.env.EMAIL_PASS || process.env.SMTP_PASS;

      if (!authUser || !authPass) {
        console.warn('⚠️ SMTP variables missing. Simulated successful send for development.');
        console.log('--- ADMIN EMAIL SIMULATION ---', adminHtml);
      } else {
        // Send Admin Email
        await transporter.sendMail({
          from: `"Wellness Vitality Newsletter" <${authUser}>`,
          to: 'lavanya@italliancetech.com',
          subject: `New Newsletter Subscriber - ${email}`,
          html: adminHtml,
        });

      }
    } catch (sendError) {
      console.error('Nodemailer Error:', sendError);
      return NextResponse.json({ success: false, error: 'Failed to subscribe. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Successfully subscribed to the newsletter!' });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
