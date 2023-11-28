import express from 'express'
import messageController from '../controllers/message.controllers'

const routes=express()

routes
.route('/')
.get(messageController.getMessages)
.post(messageController.createMessage)

routes
.route('/:id')
.patch(messageController.updatingMessage)

export default routes