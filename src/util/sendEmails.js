import nodemailer from 'nodemailer'

export const sendEmails=()=>{
    const transporter=nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587, 
        secure: false, 
        auth: {
           user: process.env.user_email,
           pass: process.env.password
      },
    })
    const recipients = [
        'tngoy@boarwanda.com',
        'fmundere@boarwanda.com',
    ];
    
    
    const mailOptions = {
        from: process.env.user_email,
        to: recipients.join(', '),
        subject: 'Test Email',
        text: 'This is a test email sent from BOA birthday wishes.'
      };
    
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
}