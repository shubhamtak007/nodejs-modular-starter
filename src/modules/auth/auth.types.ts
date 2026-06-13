type SignUpProperties = {
    name: string;
    email: string;
    password: string;
    cookies: Record<string, string>
}

type SignInProperties = {
    email: string;
    password: string;
    cookies: Record<string, string>
}

export type { SignUpProperties, SignInProperties }