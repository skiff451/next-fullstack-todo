const jwt = require('jsonwebtoken');
const accessSecret = process.env.JWT_SECRET_ACCESS;
const refreshSecret = process.env.JWT_SECRET_REFRESH;

export const token = {
    getTokens: (userId: string) => {
        const access = jwt.sign({userId}, accessSecret, {expiresIn: '5h'});
        const refresh = jwt.sign({userId}, refreshSecret, {expiresIn: '10d'});
        return {
            access,
            refresh
        }
    },
    verifyAccess: (token: string) => {
        const decoded = jwt.verify(token, accessSecret);
        return decoded.userId
    },
    verifyRefresh: (token: string) => {
        const decoded = jwt.verify(token, refreshSecret);
        return decoded.userId
    }

}
