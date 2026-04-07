import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { 
      selectedServices = [], 
      selectedPackages = [], 
      selectedNurse = null,
      appointmentType = null, 
      userDetails = {}, 
      selectedDate = '', 
      selectedTime = '', 
      total = 0 
    } = data;

    // Use EMAIL_USER and EMAIL_PASS as strictly requested
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    // --- DEBUG LOGGING ---
    console.log("--------------- EMAIL CONFIG SUMMARY ---------------");
    console.log("EMAIL_USER:", user || "Missing");
    console.log("EMAIL_PASS:", pass ? "Exists [HIDDEN]" : "Missing");
    console.log("--------------------------------------------------");

    if (!user || !pass) {
      console.error('CRITICAL: EMAIL_USER or EMAIL_PASS variables are undefined.');
      console.error('If you recently added them to .env.local, YOU MUST STOP AND RESTART YOUR DEV SERVER (npm run dev).');
      return NextResponse.json({ success: false, error: 'Email credentials missing. Please check .env.local configuration and ensure the server has been restarted.' }, { status: 500 });
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

    // --- FORMAL EMAIL STYLING ---
    const primaryColor = '#ca1254';
    const secondaryColor = '#3b3f69';
    const backgroundColor = '#f7f7fc';
    const fontStack = "'DM Sans', 'Inter', Arial, sans-serif";

    // Admin Email HTML (Formal Notification)
    const adminHtml = `
      <div style="background-color: ${backgroundColor}; padding: 40px 10px; font-family: ${fontStack};">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #ededf5;">
          <div style="background-color: ${primaryColor}; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: -0.02em;">New Booking Notification</h1>
          </div>
          
          <div style="padding: 30px;">
            <p style="color: #666; margin-bottom: 25px;">A new clinical appointment has been scheduled via the Wellness Vitality Australia portal. Please review the details below for internal processing.</p>
            
            <h3 style="color: ${secondaryColor}; font-size: 16px; border-bottom: 1px solid #ededf5; padding-bottom: 10px; margin-bottom: 15px;">Client Information</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr><td style="padding: 8px 0; color: #888; font-size: 14px; width: 120px;">Full Name</td><td style="padding: 8px 0; color: ${secondaryColor}; font-weight: 600; font-size: 14px;">${userDetails.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Email Address</td><td style="padding: 8px 0; color: ${secondaryColor}; font-weight: 600; font-size: 14px;">${userDetails.email}</td></tr>
              <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Contact Number</td><td style="padding: 8px 0; color: ${secondaryColor}; font-weight: 600; font-size: 14px;">${userDetails.phone}</td></tr>
            </table>
            
            <h3 style="color: ${secondaryColor}; font-size: 16px; border-bottom: 1px solid #ededf5; padding-bottom: 10px; margin-bottom: 15px;">Appointment Schedule</h3>
            <div style="background-color: #fafbfc; padding: 20px; border-radius: 8px; border: 1px solid #ededf5; margin-bottom: 25px;">
              <table style="width: 100%;">
                <tr><td style="padding: 5px 0; font-size: 14px; color: #666;">Date</td><td style="padding: 5px 0; font-size: 14px; color: ${secondaryColor}; font-weight: 700; text-align: right;">${selectedDate}</td></tr>
                <tr><td style="padding: 5px 0; font-size: 14px; color: #666;">Time Slot</td><td style="padding: 5px 0; font-size: 14px; color: ${secondaryColor}; font-weight: 700; text-align: right;">${selectedTime}</td></tr>
                <tr><td style="padding: 5px 0; font-size: 14px; color: #666;">Service Professional</td><td style="padding: 5px 0; font-size: 14px; color: ${primaryColor}; font-weight: 700; text-align: right;">${selectedNurse?.name || 'Assigned automatically'}</td></tr>
                <tr><td style="padding: 5px 0; font-size: 14px; color: #666;">Delivery Method</td><td style="padding: 5px 0; font-size: 14px; color: ${secondaryColor}; font-weight: 700; text-align: right;">${appointmentType?.title || 'Standard'}</td></tr>
              </table>
            </div>

            <h3 style="color: ${secondaryColor}; font-size: 16px; border-bottom: 1px solid #ededf5; padding-bottom: 10px; margin-bottom: 15px;">Clinical Requirements</h3>
            <p style="margin: 0; font-size: 14px; color: #444;"><b>Primary Category:</b> ${servicesStr}</p>
            <ul style="margin: 10px 0 25px 0; padding-left: 20px; font-size: 14px; color: #666; line-height: 1.6;">${packagesHtml}</ul>
            
            <table style="width: 100%; border-top: 2px solid ${primaryColor}; margin-top: 20px;">
              <tr>
                <td style="padding: 15px 0; font-size: 14px; color: #888;">Estimated Subtotal</td>
                <td style="padding: 15px 0; font-size: 18px; color: ${primaryColor}; font-weight: 800; text-align: right;">$${total}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #fafbfc; padding: 20px; text-align: center; border-top: 1px solid #ededf5;">
            <p style="font-size: 12px; color: #999; margin: 0;">Automated System Notification | Internal Use Only</p>
          </div>
        </div>
      </div>
    `;

    // User Email HTML (Formal Confirmation)
    const userHtml = `
      <div style="background-color: ${backgroundColor}; padding: 40px 10px; font-family: ${fontStack};">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #ededf5;">
          <div style="background-color: #ffffff; padding: 35px 30px; text-align: center; border-bottom: 1px solid #ededf5;">
            <h2 style="color: ${primaryColor}; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.02em;">WELLNESS VITALITY AUSTRALIA</h2>
            <p style="color: #888; font-size: 12px; margin-top: 5px; text-transform: uppercase; letter-spacing: 2px;">Professional Clinical Excellence</p>
          </div>
          
          <div style="padding: 35px 30px;">
            <h3 style="color: ${secondaryColor}; font-size: 20px; margin-top: 0; margin-bottom: 15px;">Appointment Confirmation</h3>
            <p style="color: #555; font-size: 15px; line-height: 1.6; margin-bottom: 25px;">Dear ${userDetails.name},</p>
            <p style="color: #555; font-size: 15px; line-height: 1.6; margin-bottom: 25px;">Thank you for scheduling your wellness treatment with us. We have received your request and your clinical appointment has been provisionally registered for the following schedule:</p>
            
            <div style="background-color: #ffffff; border: 2px solid ${primaryColor}15; border-radius: 12px; overflow: hidden; margin-bottom: 30px;">
              <div style="background-color: #fef5f8; padding: 15px 20px; border-bottom: 1px solid ${primaryColor}15;">
                <p style="margin: 0; font-size: 12px; font-weight: 800; color: ${primaryColor}; text-transform: uppercase;">Schedule Summary</p>
              </div>
              <div style="padding: 20px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 10px 0; font-size: 14px; color: #888; width: 140px;">Clinical Date</td><td style="padding: 10px 0; font-size: 14px; color: ${secondaryColor}; font-weight: 700;">${selectedDate}</td></tr>
                  <tr><td style="padding: 10px 0; font-size: 14px; color: #888;">Time Allocation</td><td style="padding: 10px 0; font-size: 14px; color: ${secondaryColor}; font-weight: 700;">${selectedTime}</td></tr>
                  <tr><td style="padding: 10px 0; font-size: 14px; color: #888;">Practitioner</td><td style="padding: 10px 0; font-size: 14px; color: ${secondaryColor}; font-weight: 700;">${selectedNurse?.name || 'Clinical Staff Member'}</td></tr>
                  <tr><td style="padding: 10px 0; font-size: 14px; color: #888;">Service Venue</td><td style="padding: 10px 0; font-size: 14px; color: ${secondaryColor}; font-weight: 700;">${addressStr}</td></tr>
                  <tr>
                    <td style="padding: 15px 0; border-top: 1px solid #ededf5; font-size: 14px; color: #888; vertical-align: bottom;">Estimated Total</td>
                    <td style="padding: 15px 0; border-top: 1px solid #ededf5; font-size: 20px; color: ${primaryColor}; font-weight: 800; vertical-align: bottom;">$${total}</td>
                  </tr>
                </table>
              </div>
            </div>

            <h4 style="color: ${secondaryColor}; font-size: 15px; margin-bottom: 12px; border-bottom: 1px solid #ededf5; padding-bottom: 8px;">Treatments Requested</h4>
            <p style="margin: 0; font-size: 14px; color: #444; font-weight: 600;">${servicesStr}</p>
            <ul style="margin: 10px 0 30px 0; padding-left: 20px; font-size: 14px; color: #666; line-height: 1.6;">${packagesHtml}</ul>

            <p style="color: #666; font-size: 14px; line-height: 1.6; margin-bottom: 30px; font-style: italic; background: #fafbfc; padding: 15px; border-radius: 8px;">
               Our clinical team will perform a final review of your request and contact you directly if any further health assessment or documentation is required prior to your appointment.
            </p>

            <p style="color: #888; font-size: 14px;">Regards,</p>
            <p style="color: ${secondaryColor}; font-weight: 800; font-size: 16px; margin-top: 5px;">Wellness Vitality Australia</p>
          </div>
          
          <div style="background-color: #fafbfc; padding: 30px; text-align: center; border-top: 1px solid #ededf5;">
            <p style="font-size: 12px; color: #999; margin-bottom: 10px;">Suite 226, 2–8 Brookhollow Avenue, Norwest NSW 2153</p>
            <p style="font-size: 12px; color: #999; margin-top: 10px; border-top: 1px solid #ededf5; padding-top: 15px;">
              This is a standard communication for confirmed clinical bookings. If you believe this has been sent in error, please disregard.
            </p>
          </div>
        </div>
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
