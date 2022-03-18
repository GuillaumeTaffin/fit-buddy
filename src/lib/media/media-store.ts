import type { Subscriber, Unsubscriber } from 'svelte/types/runtime/store';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export class MediaStore {

    private readonly state: Writable<MediaState>;

    constructor() {
        this.state = writable(MediaState.MOBILE);
    }

    subscribe(run: Subscriber<MediaState>): Unsubscriber {
        return this.state.subscribe(run);
    }

    async setWindowWidth(width: number) {
        if (width > 768) {
            this.state.set(MediaState.DESKTOP);
        } else {
            this.state.set(MediaState.MOBILE);
        }
    }
}

export enum MediaState {
    MOBILE, DESKTOP
}