import { addMessage,getAllMessage,updateMessage,getMessage } from "../services/message.service";

class MessageController{
    async getMessages(req,res){
        try{
            const messages=await getAllMessage()
            return res.status(200).json({
                messages
            })
        }
        catch(error){
            return res.status(500).json({
                message:"Unable to gett all messages,try again",
                error:error.message
            })
        }
    }

    async createMessage(req,res){
        try{
            const {title,text}=req.body  
            const newMessage=await addMessage({title,text})
            return res.status(201).json({
                message:`content for ${title} added`,
                message:newMessage
            })
        }
        catch(error){
            return res.status(500).json({
                message:'Unable to add message',
                error:error.message
            })
        }  
    }
   
    async updatingMessage(req,res){
        try{
         const {id}=req.params
         const { editedTitle, editedText } = req.body;
         const updated=await updateMessage({ title: editedTitle, text: editedText },id)
         return res.status(201).json({
            updated,
            message: 'Message updated successfully',
         })
        }
        catch(error){
            return res.status(500).json({
                message:"Unable to update message",
                error:error.message
            })
        }
    }

}

const messageController=new MessageController()
export default messageController