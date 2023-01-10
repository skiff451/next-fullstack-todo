import express, {Request, Response} from 'express';
import {checkExistedUserByEmail} from "../services/checkExistedUserByEmail";
import {createUser} from "../services/createUser";
import {sendErrorJSONResponse, sendJSONResponse, sendJSONResponseWithoutBody} from "../services/sendResponse";

const router = express.Router();
export const registrationRouter = router.post('/', async (req: Request, res: Response) => {
    try {
        if (await checkExistedUserByEmail(req)) {
            sendJSONResponseWithoutBody(res, `user already existed`)
        } else {
            const userData = await createUser(req, res);
            sendJSONResponse(res, userData, "user created successfully")
        }
    } catch (e) {
        sendErrorJSONResponse(res, e, 500)
    }
});


