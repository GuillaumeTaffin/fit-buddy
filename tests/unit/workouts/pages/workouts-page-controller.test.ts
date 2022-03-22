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
    expect(state.showNewTrainingDialog).toBeFalsy();
});

test('Default state does not show new training dialog', async () => {
    const store = new WorkoutsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    const initState = get(store);
    expect(initState.showNewTrainingDialog).toBeFalsy();
});

test('On open new training dialog', async () => {
    const store = new WorkoutsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    const initState = get(store);
    await store.openNewTrainingDialog();
    const updatedState = get(store);
    expect(updatedState.showNewTrainingDialog).toBeTruthy();
    expect(updatedState.workouts).toEqual(initState.workouts);
});

test('New training flow has dialog closed', async () => {
    const store = new WorkoutsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    await store.openNewTrainingDialog();
    await store.createWorkout('toto');
    const state = get(store);
    expect(state.showNewTrainingDialog).toBeFalsy();
});

test('Close modal when outclicked', async () => {
    const store = new WorkoutsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    await store.openNewTrainingDialog();
    await store.closeNewTrainingDialog();
    const state = get(store);
    expect(state.showNewTrainingDialog).toBeFalsy();
});