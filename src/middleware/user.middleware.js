import { User, Role } from "../database/models";
import {Op} from 'sequelize'

export const checkUserExistByEmail = async (req, res, next) => {
    const {email}=req.body
    const user = await User.findOne({
      where: {
        [Op.and]: [{ email }, { is_active: true }],
      }
    });
    if (!user) {
      return res.status(404).json({
        message: "User doesn't exist, Please contact admin for support",
      });
    }
    req.user = user;
    next();
  };