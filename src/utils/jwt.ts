import jwt from 'jsonwebtoken';

const WebToken = {
    generateAccessToken: (payload: object) => {
        return jwt.sign({ payload }, process.env.JWT_ACCESS_TOKEN_SECRET as string, {
            expiresIn: "15m",
        });
    },

    generateRefreshToken: (payload: object) => {
        return jwt.sign({ payload }, process.env.JWT_REFRESH_TOKEN_SECRET as string, {
            expiresIn: "7d",
        });
    },

    verifyRefreshToken: (token: string) => {
        return jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET as string);
    },

    verifyAccessToken: (token: string) => {
        return jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET as string);
    }
}

export default WebToken;