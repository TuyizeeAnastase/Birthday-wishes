import {Message} from '../database/models'


export const addMessage=async(message)=>{
    return await Message.create(message)
}

export const getMessage=async(title)=>{
    const message= await Message.findOne({
        where:{
            title:title
        }
    })
    return message
}

export const getAllMessage=async()=>{
    return await Message.findAll()
}

export const updateMessage=async(updated,id)=>{
    const updating = await Message.update(updated,{
        where: {
            id:id
          },
    })

    return updating;
}