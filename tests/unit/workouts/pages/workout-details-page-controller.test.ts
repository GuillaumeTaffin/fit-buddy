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
    expect(state.workout!.id).toEqual(22);
});

test('Delete training', async () => {
    const workoutsStore = new WorkoutsStore(new FakeWorkoutsDataSource());
    const controller = new WorkoutDetailsPageController(workoutsStore);
    await controller.delete(22);
    const workoutsEvent = get(workoutsStore) as AllWorkoutsEvent;
    expect(workoutsEvent.workouts).toEqual([]);
});

test('Create exercise', async () => {
    const controller = new WorkoutDetailsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    await controller.createExercise(22, 'new exercise');
    const state = get(controller);
    expect(state.workout!.exercises.length).toEqual(2);
});

test('Delete exercise', async () => {
    const controller = new WorkoutDetailsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    await controller.deleteExercise(22, 3);
    const state = get(controller);
    expect(state.workout!.exercises.length).toEqual(0);
});

test('Create set', async () => {
    const controller = new WorkoutDetailsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    await controller.createSet(22, 3, 10, 85, 90);
    const state = get(controller);
    expect(state.workout!.exercises[0].sets.length).toEqual(2);
    expect(state.workout!.exercises[0].sets[1].index).toEqual(0);
    expect(state.workout!.exercises[0].sets[1].rest).toEqual(90);
    expect(state.workout!.exercises[0].sets[1].reps).toEqual(10);
    expect(state.workout!.exercises[0].sets[1].weight).toEqual(85);
});

test('Delete set', async () => {
    const controller = new WorkoutDetailsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    await controller.deleteSet(22, 4);
    const state = get(controller);
    expect(state.workout!.exercises[0].sets.length).toEqual(0);
});

test('Edit set', async () => {
    const controller = new WorkoutDetailsPageController(new WorkoutsStore(new FakeWorkoutsDataSource()));
    await controller.updateSet(22, 4, 66, 67, 68);
    const state = get(controller);
    expect(state.workout!.exercises[0].sets.length).toEqual(1);
    expect(state.workout!.exercises[0].sets[0].index).toEqual(0);
    expect(state.workout!.exercises[0].sets[0].rest).toEqual(68);
    expect(state.workout!.exercises[0].sets[0].reps).toEqual(66);
    expect(state.workout!.exercises[0].sets[0].weight).toEqual(67);
});