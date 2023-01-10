import {Request} from "express";
import {User} from "../db/models/User";

export const checkExistedUserByEmail = async (req: Request)=>{
    const {email} = req.body;
    const user = await User.findOne({where: {email}})
    return !!user
}
