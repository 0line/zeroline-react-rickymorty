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
            return new Response(JSON.stringify({ error: 'Error fetching users' }), {
                status: 500,
                headers: {
                'Content-Type': 'application/json'
                }
            });
        }
        
        const {username, password, token } = await response.json();
        if (username !== user.username || password !== user.password) {
            return { error: 'Invalid credentials', status: 401 }
        }

        const userResponse: ResponseLogin = {
            status: 200,
            message: 'User Login successfully',
            data: {
                token: token,
                user: {
                    username: username,
                }
            }
        };  

        return userResponse;
    }
}
