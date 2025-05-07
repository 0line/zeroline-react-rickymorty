import { User } from './../domain/User';
import { UserRepository } from './../domain/UserRepository';
import { ResponseLogin } from './../domain/ResponseLogin';

export class Login {
    constructor(private readonly repository: UserRepository) {}

    async execute(user:User): Promise<ResponseLogin> {
        return await this.repository.findByUserAndPassword(user);
    }
}