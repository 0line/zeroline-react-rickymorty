export function isValidUserPwd(value: string): boolean {
    const cleaned = value.replace(/\s+/g, ''); // Elimina todos los espacios
    return cleaned.length > 3;
}

export function UserPwdNotValidError(): Error {
	return new Error(`This password is not valid`);
}