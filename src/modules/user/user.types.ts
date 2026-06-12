type SignUpUserDetails = {
    name: string;
    email: string;
    password: string;
}

type LoginUserDetails = {
    email: string;
    password: string;
}

export type { SignUpUserDetails, LoginUserDetails }