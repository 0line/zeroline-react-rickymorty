import { UserRepository } from "../domain/UserRepository";
import { User } from "../domain/User";
import { ResponseLogin } from "../domain/ResponseLogin";

export class ApiLoginRepository implements UserRepository {
    async findByUserAndPassword(user: User): Promise<ResponseLogin> {
        const response = await fetch("/users.json", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            return {
                status: 500,
                error: 'Error fetching users'
            }
        } 
        return await response.json();
    }
}
