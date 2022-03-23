/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { RoutesStore } from '../../../src/lib/routes/routes-store';
import type { NavItem } from '../../../src/lib/components/navigation/nav-item';
import { UserStore } from '../../../src/lib/user/user-store';
import { FakeAuthRepository } from '../common/fake-auth-repository';

test('Not authenticated routes', async () => {
    const userStore = new UserStore(new FakeAuthRepository(false));
    const store = new RoutesStore(userStore);

    let state: NavItem[];
    store.subscribe((s) => state = s);

    await userStore.getCurrentUser();
    const notAuthenticatedRoutes: NavItem[] = [
        { link: '/', icon: '/home.png', label: 'home' },
        { link: '/auth', icon: '/unlocked.png', label: 'sign in' }
    ];
    expect(state!).toEqual(notAuthenticatedRoutes);
});

test('Authenticated routes', async () => {
    const userStore = new UserStore(new FakeAuthRepository(true));
    const store = new RoutesStore(userStore);

    let state: NavItem[];
    store.subscribe((s) => state = s);

    await userStore.getCurrentUser();
    const expectedRoutes: NavItem[] = [
        { link: '/', icon: '/home.png', label: 'home' },
        { link: '/workouts', icon: '/healthy-lifestyle-border.png', label: 'trainings' },
        { link: '/settings', icon: '/settings.png', label: 'settings' }
    ];
    expect(state!).toEqual(expectedRoutes);
});