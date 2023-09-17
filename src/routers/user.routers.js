import express from 'express'
import userControllers from '../controllers/user.controllers'
import { userValidation } from '../validations/user.validations'


const routes=express()

routes.route('/')
.post(userValidation,userControllers.adduser)
.get(userControllers.getAllUsers)

export default routes