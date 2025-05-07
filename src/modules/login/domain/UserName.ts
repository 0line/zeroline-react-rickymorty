export function isValidUserName(userName: string): boolean {
    const cleaned = userName.replace(/\s+/g, ''); // Elimina todos los espacios
    return cleaned.length > 3;
}

export function UserNameNotValidError(username: string): Error {
	return new Error(`This username: ${username} is not valid`);
}