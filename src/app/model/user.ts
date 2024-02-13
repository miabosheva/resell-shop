export interface User {
    userName: string;
    email: string;
    password: string;
    phoneNumber: number;
}

export interface UserForLogin {
    userName: string;
    password: string;
    token: string;
}
