const bcrypt = require('bcrypt');
const saltRounds = process.env.BCRYPT_SALT_ROUNDS;
export const hash = {
    getHash: (plainPassword: string) => {
        return bcrypt.hashSync(plainPassword, parseInt(saltRounds as string));
    },
    compareHash: (password: string, hash: string) => {
        return bcrypt.compareSync(password, hash);
    }
}
