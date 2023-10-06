import {User} from '../database/models'
import {Op,Sequelize} from 'sequelize'

export const registerUser = async (user) => {
    return await User.create(user);
 };


 export const getUserBirthDay = async () => {
    const users = await User.findAll({
      where: Sequelize.literal('EXTRACT(DAY FROM birth_day) = EXTRACT(DAY FROM CURRENT_DATE) AND EXTRACT(MONTH FROM birth_day) = EXTRACT(MONTH FROM CURRENT_DATE)'),
    });
    return users;
  };
  
  
  
  
  
  

