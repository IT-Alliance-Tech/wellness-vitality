import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, enquiry } = data;

    // Validation
    if (!name || !email || !phone || !enquiry) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
    }

    const adminEmail = 'admin@wellnessvitalityaustralia.com.au';

    // Email content for Admin
    const msg = {
      to: adminEmail,
      from: adminEmail, // SendGrid requires a verified sender
      replyTo: email,   // So admin can reply directly to the user
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Enquiry: ${enquiry}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #3b3f69;">New Contact Enquiry</h2>
          <p>You have received a new message from your website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px;"><strong>Enquiry:</strong></td>
              <td style="padding: 10px;">${enquiry}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777;">
            <p>This email was sent from the contact form on wellnessvitalityaustralia.com.au</p>
          </div>
        </div>
      `,
    };

    try {
      await sgMail.send(msg);
      return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (sendgridError) {
      console.error('SendGrid Error:', sendgridError);
      
      // Check for specific SendGrid error response
      if (sendgridError.response) {
        console.error(sendgridError.response.body);
      }
      
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to send message via SendGrid. Please check API key and verified sender.' 
      }, { status: 500 });
    }

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
