import express from 'express'
import userControllers from '../controllers/user.controllers'
import { userValidation,loginValidation } from '../validations/user.validations'
import multer from 'multer'
import { checkUserExistByEmail} from '../middleware/user.middleware'

const routes=express()

const storage = multer.memoryStorage(); // Use memory storage to handle file uploads
const upload = multer({ dest: 'uploads/' }); 

// const upload = multer();

routes.route('/')
.post(userValidation,userControllers.adduser)
.get(userControllers.getStaffs)

routes.post('/login',loginValidation,checkUserExistByEmail,userControllers.login)

routes.post('/many',upload.single('file'),userControllers.addManyStaff)


export default routes