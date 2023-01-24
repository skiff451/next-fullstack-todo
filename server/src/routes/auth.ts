import express, {Request, Response} from 'express';
import {checkExistedUserByEmail} from "../services/checkExistedUserByEmail";
import {createUser} from "../services/createUser";
import {sendErrorJSONResponse, sendJSONResponse, sendJSONResponseWithoutBody} from "../services/sendResponse";
import {cookies} from "../helpers/cookies";
import {refreshToken} from "../services/refresh";
import {User} from "../db/models/User";
import {login} from "../services/login";

const router = express.Router();
router.post('/registration', async (req: Request, res: Response) => {
    try {
        if (await checkExistedUserByEmail(req)) {
            sendErrorJSONResponse(res, new Error("invalid email"), 400,`user already existed`)
        } else {
            const userData = await createUser(req, res);
            sendJSONResponse(res, userData, "user created successfully")
        }
    } catch (e) {
        sendErrorJSONResponse(res, e, 500, 'registration error')
    }
});

router.post('/login', async (req: Request, res: Response) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({where: {email}})
        if (user) {
            const token = await login(user, password, res)
            if (token) {
                const loggedUser = {
                    id: user.dataValues.id,
                    name: user.dataValues.name,
                    email: user.dataValues.email,
                    token
                }
                sendJSONResponse(res, loggedUser, "user logged successfully")
            } else {
                sendErrorJSONResponse(res, new Error("password errors"), 403, "invalid credentials")
            }
        } else {
            sendErrorJSONResponse(res, new Error("email errors"), 403, "invalid credentials")
        }
    } catch (e) {
        sendErrorJSONResponse(res, e, 500, 'registration error')
    }
});

router.get('/logout', async (req: Request, res: Response) => {
    try {
        cookies.setAccessToken("", res);
        sendJSONResponseWithoutBody(res, `user logged out`)
    } catch (e) {
        sendErrorJSONResponse(res, e, 500, "logout error")
    }
});

router.get('/refresh', async (req: Request, res: Response) => {
    try {
        const refresh = refreshToken(req, res);
        sendJSONResponse(res, {refresh}, `refresh successfully`);
    } catch (e) {
        sendErrorJSONResponse(res, e, 401, "refresh error");
    }
});


export default router;
