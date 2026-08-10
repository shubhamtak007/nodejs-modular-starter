import bcrypt from 'bcrypt';

async function createHashPassword(password: string) {
    if (!password) {
        throw Error('No password.')
    }

    return bcrypt.hash(password, 10);
}

async function comparePassword(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword);
}

const PasswordService = { createHashPassword, comparePassword };

export default PasswordService;