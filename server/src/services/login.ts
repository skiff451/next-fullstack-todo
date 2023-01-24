import {Response} from "express";
import {token} from "../helpers/jwt";
import {cookies} from "../helpers/cookies";
import {hash} from "../helpers/hash";
import {UserAttributes, UserInput} from "../db/models/User";
import {Model} from "sequelize";


export const login = async (user:  Model<UserAttributes, UserInput>, password: string, res: Response) => {
    const compared = hash.compareHash(password, user.dataValues.password)
    if (compared) {
        const {access, refresh} = token.getTokens(user.dataValues.id)
        cookies.setAccessToken(access, res);
        return refresh
    } else {
        return null
    }

}
