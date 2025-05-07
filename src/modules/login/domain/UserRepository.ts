import { ResponseLogin } from './ResponseLogin';
import { User } from './User';

export interface UserRepository {
    findByUserAndPassword(user: User): Promise<ResponseLogin>;
}