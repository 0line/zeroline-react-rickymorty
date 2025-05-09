import { isValidUserName, UserNameNotValidError } from "./UserName";
import { isValidUserPwd, UserPwdNotValidError } from "./UserPwd";
import { ResponseLogin } from "./ResponseLogin";
import { User } from "lucide-react";

export interface User {
    username: string;
    password: string;
}

export function isValidUser({ username, password}: User): void {
    if (!isValidUserName(username)) {
        throw UserNameNotValidError(username);
    }
    if (!isValidUserPwd(password)) {
        throw UserPwdNotValidError();
    }

    isValidLogin({ username, password });
}

export function isValidLogin({ username, password}: User) {
    if ('Test123' !== username || 'password@2.' !== password) {
        throw new Error(`Invalid credentials`);
    }

}