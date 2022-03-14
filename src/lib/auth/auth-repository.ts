import type { User } from '../user/user';

export interface AuthRepository {
    getCurrentUser(): Promise<User>;

    signIn(email: string, password: string): Promise<User>;

    signUp(email: string, password: string): Promise<User>;
}