/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    WorkoutDetailsPageController
} from '../../../../src/lib/workouts/pages/workout-details-page/workout-details-page-controller';
import { WorkoutsStore } from '../../../../src/lib/workouts/service/workouts-store';
import { FakeWorkoutsDataSource } from '../data-sources/fake-workouts-data-source';
import { get } from 'svelte/store';

test('No workout loaded by default', () => {
    const controller = new WorkoutDetailsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    const state = get(controller);
    expect(state.workout).not.toBeDefined();
});

test('Get workout details', async () => {
    const controller = new WorkoutDetailsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    await controller.getDetails(22);
    const state = get(controller);
    expect(state.workout).toBeDefined();
    expect(state.workout!.id).toEqual(BigInt(22));
});