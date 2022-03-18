/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MediaState, MediaStore } from '../../../src/lib/media/media-store';


test('Default state is MOBILE', async () => {
    const store = new MediaStore();
    let state: MediaState;
    store.subscribe((s) => state = s);
    expect(state!).toEqual(MediaState.MOBILE);
});

test('Width larger than 768px is DESKTOP', async () => {
    const store = new MediaStore();
    let state: MediaState;
    store.subscribe((s) => state = s);
    await store.setWindowWidth(769);
    expect(state!).toEqual(MediaState.DESKTOP);
});

test('Width smaller of equal to 768px is MOBILE', async () => {
    const store = new MediaStore();
    let state: MediaState;
    store.subscribe((s) => state = s);
    await store.setWindowWidth(1200);
    await store.setWindowWidth(768);
    expect(state!).toEqual(MediaState.MOBILE);
});
