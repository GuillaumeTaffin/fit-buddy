import type { AuthRepository } from './auth-repository';
import { User } from '../user/user';
import { client } from '../supabase/supabase-client';

export class SupabaseAuthRepository implements AuthRepository {
    async getCurrentUser(): Promise<User> {
        return client.auth.user() == null ? User.undefined() : User.authenticated();
    }

    async signIn(email: string, password: string): Promise<User> {
        const response = await client.auth.signIn({ email: email, password: password });
        return response.user == null ? User.undefined() : User.authenticated();
    }
}