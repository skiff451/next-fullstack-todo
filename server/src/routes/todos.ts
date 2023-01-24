import express, {Request, Response} from "express";
import {sendErrorJSONResponse, sendJSONResponse} from "../services/sendResponse";
import {createTodo} from "../services/createTodo";


const router = express.Router();

router.post('/all', async (req: Request, res: Response) => {
    try {

    } catch (e) {
        sendErrorJSONResponse(res, e, 500, 'query all todos error')
    }
});

router.post('/create', async (req: Request, res: Response) => {
    try {
        const user = await createTodo(req)
        sendJSONResponse(res, user, "user created successfully")
    } catch (e) {
        sendErrorJSONResponse(res, e, 500, 'create todo error')
    }
});

export default router;
