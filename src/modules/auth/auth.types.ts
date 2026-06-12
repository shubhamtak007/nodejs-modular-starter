type SignUpRequest = {
    name: string;
    email: string;
    password: string;
    cookies: Record<string, string>
}

type LoginRequest = {
    email: string;
    password: string;
    cookies: Record<string, string>
}

export type { SignUpRequest, LoginRequest }