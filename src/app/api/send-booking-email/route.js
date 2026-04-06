import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { 
      selectedServices = [], 
      selectedPackages = [], 
      appointmentType = null, 
      userDetails = {}, 
      selectedDate = '', 
      selectedTime = '', 
      total = 0 
    } = data;

    // Use EMAIL_USER and EMAIL_PASS as strictly requested
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      console.warn('⚠️ EMAIL_USER or EMAIL_PASS variables missing in .env.local.');
      return NextResponse.json({ success: false, error: 'Email credentials not fully configured on server.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Defaulting to Gmail (SMTP) as instructed
      auth: {
        user: user,
        pass: pass,
      },
    });

    // Format services
    const servicesStr = selectedServices.length > 0 
      ? selectedServices.map(s => s.title).join(', ') 
      : 'No services specified';

    const packagesHtml = selectedPackages.length > 0 
      ? selectedPackages.map(pkg => `<li><b>${pkg.name}</b></li>`).join('') 
      : '<li>None</li>';
      
    const isTeleconsultation = appointmentType?.id === 'teleconsultation';
    const addressStr = isTeleconsultation 
      ? 'Teleconsultation' 
      : (userDetails.address || 'Clinic Visit');

    // Admin Email HTML
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #ca1254;">Wellness Vitality Australia - New Booking</h2>
        <p>A new booking has just been submitted via the website.</p>
        
        <h3 style="border-bottom: 2px solid #ca1254; padding-bottom: 8px;">Client Details</h3>
        <p><b>Name:</b> ${userDetails.name}</p>
        <p><b>Email:</b> ${userDetails.email}</p>
        <p><b>Phone:</b> ${userDetails.phone}</p>
        
        <h3 style="border-bottom: 2px solid #ca1254; padding-bottom: 8px;">Appointment Details</h3>
        <p><b>Type:</b> ${appointmentType?.title || 'Not specified'}</p>
        <p><b>Location/Address:</b> ${addressStr}</p>
        <p><b>Date:</b> ${selectedDate}</p>
        <p><b>Time:</b> ${selectedTime}</p>
        
        <h3 style="border-bottom: 2px solid #ca1254; padding-bottom: 8px;">Selected Treatments</h3>
        <p><b>Base Services:</b> ${servicesStr}</p>
        <ul>${packagesHtml}</ul>
        
        <p><b>Estimated Total Subtotal:</b> $${total}</p>
      </div>
    `;

    // User Email HTML
    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2 style="color: #ca1254;">Wellness Vitality Australia</h2>
        </div>
        
        <h3>Booking Confirmation</h3>
        <p>Hi ${userDetails.name},</p>
        <p>Thank you for choosing Wellness Vitality Australia. We have successfully received your booking request!</p>
        
        <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #ca1254; margin: 20px 0;">
          <p style="margin-top: 0;"><b>Appointment Type:</b> ${appointmentType?.title || 'Not specified'}</p>
          <p><b>Date:</b> ${selectedDate}</p>
          <p><b>Time:</b> ${selectedTime}</p>
          <p><b>Location:</b> ${addressStr}</p>
          <p style="margin-bottom: 0;"><b>Estimated Total:</b> $${total}</p>
        </div>

        <h3>Your Selected Services</h3>
        <p>${servicesStr}</p>
        <ul>${packagesHtml}</ul>

        <p>Our team will contact you shortly to confirm the final details of your appointment.</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
        <p style="font-size: 12px; color: #888; text-align: center;">
          This is an automated confirmation. If you need to make changes, please contact us directly.
        </p>
      </div>
    `;

    // Send Admin Email
    await transporter.sendMail({
      from: `"Wellness Website" <${user}>`,
      to: 'lavanya@italliancetech.com',
      subject: `New Booking Received - ${userDetails.name}`,
      html: adminHtml,
    });

    // Send User Email
    if (userDetails.email) {
      await transporter.sendMail({
        from: `"Wellness Vitality Australia" <${user}>`,
        to: userDetails.email,
        subject: `Booking Confirmation – Wellness Vitality Australia`,
        html: userHtml,
      });
    }

    return NextResponse.json({ success: true, message: 'Emails dispatched successfully' });

  } catch (err) {
    console.error('Nodemailer Error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
