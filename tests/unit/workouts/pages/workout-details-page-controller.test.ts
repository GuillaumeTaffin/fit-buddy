/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    WorkoutDetailsPageController
} from '../../../../src/lib/workouts/pages/workout-details-page/workout-details-page-controller';
import { WorkoutsStore } from '../../../../src/lib/workouts/service/workouts-store';
import { FakeWorkoutsDataSource } from '../data-sources/fake-workouts-data-source';
import { get } from 'svelte/store';
import type { AllWorkoutsEvent } from '../../../../src/lib/workouts/service/workouts-event';

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

test('Delete training dialog is closed by default', async () => {
    const controller = new WorkoutDetailsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    const initState = get(controller);
    expect(initState.showDeleteDialog).toBeFalsy();
});

test('Show delete training dialog', async () => {
    const controller = new WorkoutDetailsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    const initState = get(controller);
    await controller.openDeleteTrainingDialog();
    const state = get(controller);
    expect(state.showDeleteDialog).toBeTruthy();
    expect(state.workout).toEqual(initState.workout);
});

test('Close delete training dialog', async () => {
    const controller = new WorkoutDetailsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    await controller.openDeleteTrainingDialog();
    await controller.closeDeleteTrainingDialog();
    const state = get(controller);
    expect(state.showDeleteDialog).toBeFalsy();
});

test('Delete training', async () => {
    const workoutsStore = new WorkoutsStore(new FakeWorkoutsDataSource());
    const controller = new WorkoutDetailsPageController(workoutsStore);
    await controller.delete(22);
    const workoutsEvent = get(workoutsStore) as AllWorkoutsEvent;
    expect(workoutsEvent.workouts).toEqual([]);
});