export class User {
    constructor(readonly authenticated: boolean) {
    }

    static undefined = () => new User(false);

    static authenticated = () => new User(true);
}