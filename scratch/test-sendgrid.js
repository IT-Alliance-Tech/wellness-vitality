// To run this: SENDGRID_API_KEY=your_key node scratch/test-sendgrid.js
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'admin@wellnessvitalityaustralia.com.au',
  from: 'admin@wellnessvitalityaustralia.com.au',
  subject: 'Test Email',
  text: 'This is a test email.',
};

sgMail.send(msg)
  .then(() => {
    console.log('Email sent successfully');
  })
  .catch((error) => {
    console.error('Error sending email:');
    if (error.response) {
      console.error(JSON.stringify(error.response.body, null, 2));
    } else {
      console.error(error);
    }
  });