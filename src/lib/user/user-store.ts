import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import type { Subscriber, Unsubscriber } from 'svelte/types/runtime/store';
import type { AuthRepository } from '../auth/auth-repository';
import { SupabaseAuthRepository } from '../auth/supabase-auth-repository';
import { User } from './user';

export class UserStore {
    private readonly user: Writable<User>;

    constructor(private readonly authRepository: AuthRepository = new SupabaseAuthRepository()) {
        this.user = writable(User.undefined());
    }

    subscribe(run: Subscriber<User>): Unsubscriber {
        return this.user.subscribe(run);
    }

    async getCurrentUser() {
        const user = await this.authRepository.getCurrentUser();
        this.user.set(user);
    }

    async signIn(email: string, password: string) {
        const user = await this.authRepository.signIn(email, password);
        this.user.set(user);
    }
}