import nodemailer from 'nodemailer'
import { getUserBirthDay } from '../services/user.services';
import ejs from 'ejs';
import path from 'path'
import {getMessage} from '../services/message.service'

export const sendEmails=async()=>{

  const message=await getMessage('birthday')
  const content=message.text

  const recipients = [
  ];
 
  const users = await getUserBirthDay();
  for(let i=0;i<users.length;i++){
    console.log(users[i].firstname ,users[i].email)
    recipients.push({ email: users[i].email,name: users[i].firstname });
  }


  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.boarwanda.com',
      port: 25,
    });

    const emailPromises = recipients.map(async (recipient) => {

      const templateData = {
        userName: recipient.name,
        content:content,
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