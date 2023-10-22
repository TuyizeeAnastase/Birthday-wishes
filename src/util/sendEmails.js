import nodemailer from 'nodemailer'
import { getUserBirthDay } from '../services/user.services';
import ejs from 'ejs';
import path from 'path'

export const sendEmails=async()=>{

  const recipients = [
  ];
  const names=[
  ];
  
  const users = await getUserBirthDay();
  for(let i=0;i<users.length;i++){
    recipients.push({ email: users[i].email });
    names.push({name:users[i].firstname})
  }

  console.log(recipients,names.map(name => name.name))

  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.boarwanda.com',
      port: 25,
    });

    const emailPromises = recipients.map(async (recipient) => {

      const templateData = {
        userName: names.map(name => name.name),
        imageUrl: 'https://res.cloudinary.com/depljf8uc/image/upload/v1698698116/wish_lyzlqg.jpg',
      };

      const emailTemplatePath = path.join(__dirname, 'emailTemplate.ejs');

      const emailHTML = await ejs.renderFile(emailTemplatePath, templateData);

      const mailOptions = {
        from: 'HR@boarwanda.com',
        to: recipient.email,
        subject: 'Birthday Greetings',
        html:emailHTML
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