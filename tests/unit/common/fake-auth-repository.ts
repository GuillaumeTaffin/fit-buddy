import type { AuthRepository } from '../../../src/lib/auth/auth-repository';
import { User } from '../../../src/lib/user/user';

export class FakeAuthRepository implements AuthRepository {
    private readonly user;

    constructor(authSuccessful: boolean) {
        this.user = authSuccessful ? User.authenticated() : User.undefined();
    }

    async getCurrentUser(): Promise<User> {
        return Promise.resolve(this.user);
    }

    signIn(email: string, password: string): Promise<User> {
        return Promise.resolve(this.user);
    }

    signUp(email: string, password: string): Promise<User> {
        return Promise.resolve(this.user);
    }

}