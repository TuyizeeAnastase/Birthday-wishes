import {User} from '../database/models'
import {Op,Sequelize} from 'sequelize'

export const registerUser = async (user) => {
    return await User.create(user);
 };


export const getUsers=async()=>{
    return await User.findAndCountAll({
        wher:{
            is_active:true
        },
        order: [['birth_day', 'ASC']],
    })
} 

export const searchUser=async(q)=>{
    return await User.findAndCountAll({
     where:{
        is_active:true,
        "$firstname$":{
            [Op.like]: `%${q}%`,
        },
        "$lastname$":{
            [Op.like]: `%${q}%`,
        }
     },
     order: [['birth_day', 'ASC']],
    })
}

export const searchBirthDay=async(targetMonth,targetDay)=>{
    return await User.findAndCountAll({
        where:{
            is_active:true,
            birth_day: {
                [Op.and]: [
                    Sequelize.where(Sequelize.fn('DATE_PART', 'month', Sequelize.col('birth_day')), targetMonth),
                    Sequelize.where(Sequelize.fn('DATE_PART', 'day', Sequelize.col('birth_day')), targetDay),
                  ],
            },
        },
        order: [['birth_day', 'ASC']],
    })
}

export const searchByMonth=async(targetMonth)=>{
    return await User.findAndCountAll({
        where: Sequelize.where(
            Sequelize.fn('EXTRACT', Sequelize.literal('MONTH FROM "birth_day"')), 
            targetMonth
          ),
        order: [['birth_day', 'ASC']],
    })
}

export const searchBYInterval=async(start_date,end_date)=>{
    return await User.findAndCountAll({
        where:{
            is_active:true,
            birth_day: {
                [Op.and]: {
                  [Op.lte]: new Date(start_date),
                  [Op.gte]: new Date(end_date),
                },
        }
    }}
)
}
