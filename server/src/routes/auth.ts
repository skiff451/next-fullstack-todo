import express, {Request, Response} from 'express';
import {checkExistedUserByEmail} from "../services/checkExistedUserByEmail";
import {createUser} from "../services/createUser";
import {sendErrorJSONResponse, sendJSONResponse, sendJSONResponseWithoutBody} from "../services/sendResponse";
import {cookies} from "../helpers/cookies";

const router = express.Router();
router.post('/registration', async (req: Request, res: Response) => {
    try {
        if (await checkExistedUserByEmail(req)) {
            sendJSONResponseWithoutBody(res, `user already existed`)
        } else {
            const userData = await createUser(req, res);
            sendJSONResponse(res, userData, "user created successfully")
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

export default router;
