import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import routes from './routers'
import cron from 'node-cron'
import { sendEmails } from './util/sendEmails'
import fileupload from "express-fileupload";

const app=express()
const PORT=process.env.PORT

// app.use(fileupload({ useTempFiles: true }));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(cors());
app.use(routes);

const server = app.listen(PORT, console.log(`Server Listening on ${PORT} `));

// cron.schedule('*/1 * * * *',()=>{
//   console.log('Running email script...');
//   sendEmails()
// })
// sendEmails()
process.on("unhandledRejection", (err, promise) => {

  // close server & exit process
  server.close(() => process.exit(1));
});

export default app;

