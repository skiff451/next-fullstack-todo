import {Request, Response} from "express";
import {User} from "../db/models/User";
import {token} from "../helpers/jwt";
import {cookies} from "../helpers/cookies";
import {hash} from "../helpers/hash";

export const createUser = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;
    const hashedPassword = hash.getHash(password)
    const newUser = await User.create({name, email, password: hashedPassword})
    const {id} = newUser.dataValues
    const {access, refresh} = token.getTokens(id)
    cookies.setAccessToken(access, res);

    return {
        id,
        name,
        email,
        token: refresh
    }
}
