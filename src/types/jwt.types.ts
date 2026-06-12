type JwtPayload = {
    userId: string
}

type Jwt = {
    payload: JwtPayload
}

type JwtError = {
    name: string,
    message: string,
    expiredAt: number
}

export type { Jwt, JwtPayload, JwtError };