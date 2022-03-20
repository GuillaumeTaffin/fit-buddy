/* eslint-disable */
import { UserStore } from '../../../src/lib/user/user-store';
import type { User } from '../../../src/lib/user/user';
import { FakeAuthRepository } from '../common/fake-auth-repository';

test('Current user undefined', async () => {
    const store = new UserStore(new FakeAuthRepository(false));
    let user: User;
    store.subscribe((state) => user = state);
    await store.getCurrentUser();
    expect(user!.authenticated).not.toBeTruthy();
});

test('Current user authenticated', async () => {
    const store = new UserStore(new FakeAuthRepository(true));
    let user: User;
    store.subscribe((state) => user = state);
    await store.getCurrentUser();
    expect(user!.authenticated).toBeTruthy();
});

test('Sign in successful', async () => {
    const store = new UserStore(new FakeAuthRepository(true));
    let user: User;
    store.subscribe((state) => user = state);
    await store.signIn('email', 'password');
    expect(user!.authenticated).toBeTruthy();
});

test('Sign in not successful', async () => {
    const store = new UserStore(new FakeAuthRepository(false));
    let user: User;
    store.subscribe((state) => user = state);
    await store.signIn('email', 'password');
    expect(user!.authenticated).not.toBeTruthy();
});

test('Sign up successful', async () => {
    const store = new UserStore(new FakeAuthRepository(true));
    let user: User;
    store.subscribe((state) => user = state);
    await store.signUp('email', 'password');
    expect(user!.authenticated).toBeTruthy();
});

test('Sign up not successful', async () => {
    const store = new UserStore(new FakeAuthRepository(false));
    let user: User;
    store.subscribe((state) => user = state);
    await store.signUp('email', 'password');
    expect(user!.authenticated).not.toBeTruthy();
});
