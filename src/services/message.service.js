import {Message} from '../database/models'


export const addMessage=async(message)=>{
    return await Message.create(message)
}

export const getMessage=async(title)=>{
    return await Message.findOne({
        where:{
            title:title
        }
    })
}

export const updateMessage=async(id,updated)=>{
    return await Message.update(updated,
        {
            where: {
                id: id,
              },
        }
        )
}