import {Request, Response} from 'express';

const options = {
    maxAge: 1000 * 60 * 60 * 5, // would expire after 5 hours
    httpOnly: true, // The cookie only accessible by the web server
    // signed: true // Indicates if the cookie should be signed
}
export const cookies = {
    setAccessToken: (token: string, res: Response) => {
        res.cookie('accessToken', token, options)
    },
    getAccessToken: (req: Request) => {
        return req.cookies.accessToken
    }
}
