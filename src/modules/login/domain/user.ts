import { isValidUserName, UserNameNotValidError } from "./UserName";
import { isValidUserPwd, UserPwdNotValidError } from "./UserPwd";

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
}