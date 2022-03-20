import type { NavItem } from '../components/navigation/nav-item';
import type { Readable } from 'svelte/store';
import { derived } from 'svelte/store';
import type { Subscriber, Unsubscriber } from 'svelte/types/runtime/store';
import type { User } from '../user/user';
import type { UserStore } from '../user/user-store';

export class RoutesStore {
    private readonly state: Readable<NavItem[]>;

    constructor(private readonly userStore: UserStore) {
        this.state = derived(userStore, ((user, set) => this.updateRoutes(user, set)));
    }

    subscribe(run: Subscriber<NavItem[]>): Unsubscriber {
        return this.state.subscribe(run);
    }

    updateRoutes(user: User, set: (value: NavItem[]) => void) {
        user.authenticated ?
            set([
                { link: '/', icon: 'home.png', label: 'home' },
                { link: '/workouts', icon: 'healthy-lifestyle-border.png', label: 'trainings' },
                { link: '/settings', icon: 'settings.png', label: 'settings' }
            ]) :
            set([
                { link: '/', icon: 'home.png', label: 'home' },
                { link: '/auth', icon: 'unlocked.png', label: 'sign in' }
            ]);
    }
}