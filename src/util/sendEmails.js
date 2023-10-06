import nodemailer from 'nodemailer'
import { getUserBirthDay } from '../services/user.services';
import user from '../database/models/user';

export const sendEmails=async()=>{

  const recipients = [
  ];
  
  const users = await getUserBirthDay();
  for(let i=0;i<users.length;i++){
    recipients.push({ email: users[i].email });
  }

  console.log(recipients)

  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.boarwanda.com',
      port: 25,
    });

    const emailPromises = recipients.map(async (recipient) => {
      const mailOptions = {
        from: 'HR@boarwanda.com',
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