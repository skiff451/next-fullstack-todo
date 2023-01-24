import {Request,} from "express";
import {token} from "../helpers/jwt";
import {cookies} from "../helpers/cookies";
import {Todo} from "../db/models/Todo";


export const createTodo = async (req: Request) => {
    const {title, description, deadline} = req.body;
    const access = cookies.getAccessToken(req)
    const UserId = token.verifyAccess(access);
    return await Todo.create({
        title,
        description,
        deadline,
        status: "in process",
        UserId
    },)
}
