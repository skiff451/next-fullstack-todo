import {Response} from "express";

type Status = 200
export const sendJSONResponse = <T>(res: Response, body: T, message?: string) => {
    res.json({
        body,
        message
    })
}

export const sendJSONResponseWithoutBody = (res: Response, message: string, status?: Status) => {
    if (status) {
        res.status(status).json({
            message
        })
    } else {
        res.json({
            message
        })
    }
}

type ErrorStatus = 400 | 401  | 403 | 500
export const sendErrorJSONResponse = (res: Response, e: Error | unknown, status: ErrorStatus, message?: string,) => {
    res.status(status).json(
        {
            message,
            error: (e as Error).message
        });
}
