import {token} from "../helpers/jwt";
import {cookies} from "../helpers/cookies";
import {Request, Response} from "express";

export const refreshToken = (req: Request, res: Response)=>{
    const refreshToken =  req.headers["authorization"]?.split(" ")[1] as string;
    const id = token.verifyRefresh(refreshToken);
    const {access, refresh} = token.getTokens(id);
    cookies.setAccessToken(access, res);
    return refresh
}
