import prisma from '../../config/db.js';
import TokenService from '../../services/token.service.js';
import PasswordService from '../../services/password.service.js';
import type { SignUpRequest, LoginRequest } from './auth.types.js';
import type { Jwt } from '../../types/jwt.types.js';

async function signUp(request: SignUpRequest) {
    const existingUser = await prisma.user.findUnique({ where: { email: request.email } })

    if (existingUser) {
        throw new Error('User already exist!');
    }

    const hashedPassword = await PasswordService.createHashPassword(request.password);
    const user = await prisma.user.create({
        data: {
            name: request.name,
            email: request.email,
            password: hashedPassword,
        },
    });

    const tokens = manageTokens(user.id, request.cookies.refreshToken);
    return tokens;
};

async function signIn(request: LoginRequest) {
    if (!request.email) throw new Error('Email missing!!.');

    const foundUser = await prisma.user.findUnique({
        where: {
            email: request.email,
        },
    });

    if (!foundUser) {
        throw new Error("Incorrect username!!");
    }

    const isMatch = await PasswordService.comparePassword(
        request.password,
        foundUser.password
    );

    if (!isMatch) {
        throw new Error("Incorrect password!!");
    }

    const tokens = manageTokens(foundUser.id, request.cookies.refreshToken);
    return tokens;
}

async function refreshToken(token: string) {
    if (!token) {
        throw new Error('Refresh token is missing!');
    }

    const decoded = (TokenService.verifyRefreshToken(token) as Jwt).payload;
    const user = await prisma.user.findUnique({
        where: {
            id: decoded.userId,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    const tokens = manageTokens(user.id, token);
    return tokens;
};

async function signOut(token: string) {
    if (!token) {
        throw new Error('Token is missing!!.');
    }

    const storedToken = await prisma.refreshToken.findFirst({ where: { token: token } });

    if (!storedToken) {
        throw new Error('Invalid token!!.');
    }

    await prisma.refreshToken.deleteMany({ where: { id: storedToken.id } });

    return { message: 'Log out successfully!!' }
};

async function manageTokens(userId: string, token: string) {
    if (!userId) {
        throw new Error('userId is missing!');
    }

    if (token) {
        const storedToken = await prisma.refreshToken.findFirst({ where: { token: token } });
        if (storedToken) {
            await prisma.refreshToken.deleteMany({ where: { id: storedToken.id } });
        }
    }

    const tokenPayload = { userId: userId }
    const newAccessToken = TokenService.generateAccessToken(tokenPayload);
    const newRefreshToken = TokenService.generateRefreshToken(tokenPayload);

    await prisma.refreshToken.create({ data: { userId: userId, token: newRefreshToken } })

    return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken
    };
}

const AuthenticationService = {
    signUp, signIn, refreshToken, signOut
}

export default AuthenticationService;