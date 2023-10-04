import nodemailer from 'nodemailer'
import { getUserBirth_day } from '../services/user.services';

export const sendEmails=async()=>{

  // const recipients = [
  //   { email: 'tngoy@boarwanda.com'},
  //   { email: 'fmundere@boarwanda.com'},
  // ];
 
  const users=await getUserBirth_day()
  console.log(users)


  const recipients = [
    { email: 'anastasetuyizere7@gmail.com'},
    { email: 'sokonext@gmail.com'},
  ];
  try {
    const transporter = nodemailer.createTransport({
      // host: 'mail.boarwanda.com',
      // port: 587,
      // secure: false,
      service: 'Gmail',
      auth: {
        user: process.env.user_gmail,
        pass: process.env.app_password,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
    });

    const emailPromises = recipients.map(async (recipient) => {
      const mailOptions = {
        from: process.env.user_gmail,
        to: recipient.email,
        subject: 'Test Email',
        text: 'This is a test email sent from BOA birthday wishes.',
      };
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${recipient.email}: ${info.response}`);
    });

    await Promise.all(emailPromises);
    console.log('All emails sent successfully.');
  } catch (error) {
    console.error('Error sending emails:', error);
  }
    
}