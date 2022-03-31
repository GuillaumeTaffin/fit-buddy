import { WorkoutsPageController } from '../../../../src/lib/workouts/pages/workouts-page/workouts-page-controller';
import { WorkoutsStore } from '../../../../src/lib/workouts/service/workouts-store';
import { FakeWorkoutsDataSource } from '../data-sources/fake-workouts-data-source';
import type { WorkoutsPageState } from '../../../../src/lib/workouts/pages/workouts-page/workouts-page-state';
import { get } from 'svelte/store';

test('Get all workouts', async () => {
    const store = new WorkoutsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    await store.getAllWorkouts();
    const state: WorkoutsPageState = get(store);
    expect(state.workouts.length).toEqual(1);
});

test('Create new workout', async () => {
    const store = new WorkoutsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    await store.createWorkout('new workout');
    const state = get(store);
    expect(state.workouts.length).toEqual(2);
    expect(state.workouts[1].title).toEqual('new workout');
});
