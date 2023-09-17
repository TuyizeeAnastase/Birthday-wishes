import { registerUser,getUsers,searchUser,searchBirthDay,searchByMonth,searchBYInterval } from "../services/user.services";

class UserController{
    async adduser(req,res){
        try{
            const {firstname,lastname,email,birth_day}=req.body
            const newUser=await registerUser({firstname,email,lastname,birth_day,role_id:1,is_active:true})
            return res.status(201).json({
                message: `${firstname} user created successfully`,
                user: newUser,
              });
        }catch(error){
            return res.status(500).json({
                message: "Unable to register, try again",
                error: error.message,
              });
        }
    }

    async getAllUsers(req,res){
        try{
            const {q,targetMonth,targetDay,start_date,end_date}=req.query
            let users;
            if(q){
                users=await searchUser(q)
            }
            else if(targetMonth && targetDay){
                users=await searchBirthDay(targetMonth,targetDay)
            }
            else if(targetMonth){
                users=await searchByMonth(targetMonth)
            }
            else if(start_date && end_date){
                users=await searchBYInterval(start_date,end_date)
            }
            else{
                users=await getUsers()
            }
            return res.status(200).json({
                users
            })

        }catch(error){
            return res.status(500).json({
                message: "Unable to get all Users, try again",
                error: error.message,
              });
        }
    }
}

const userControllers=new UserController()
export default userControllers