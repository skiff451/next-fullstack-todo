import {Request, Response, NextFunction} from "express";
import {sendErrorJSONResponse} from "./sendResponse";
import {cookies} from "../helpers/cookies";
import {token} from "../helpers/jwt";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.originalUrl !== "/auth/refresh"
            && req.originalUrl !== "/auth/registration"
            && req.originalUrl !== "/auth/login"
        ) {
            const access = cookies.getAccessToken(req)
            token.verifyAccess(access);
        }
        next();
    } catch (e) {
        sendErrorJSONResponse(res, e, 401)
    }

}
