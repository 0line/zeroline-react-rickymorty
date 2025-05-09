import { isValidLogin, isValidUser, User } from './../domain/User';
import { UserRepository } from './../domain/UserRepository';
import { ResponseLogin } from './../domain/ResponseLogin';

export class Login {
    constructor(private readonly repository: UserRepository) {}

    async execute(user:User): Promise<ResponseLogin> {
        try {
            isValidUser(user);
            
            return await this.repository.findByUserAndPassword(user);
        } catch (error) {
            if (error instanceof Error) {
                return {
                    status: 401,
                    error: error.message
                };
            }
            return {
                status: 500,
                error: 'Internal Server Error'
            };
        }
    }
}