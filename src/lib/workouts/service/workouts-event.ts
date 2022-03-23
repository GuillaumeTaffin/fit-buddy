/* eslint-disable @typescript-eslint/no-empty-interface */
import type { Workout } from '../workout';

export interface WorkoutsEvent {
}

export class AllWorkoutsEvent implements WorkoutsEvent {
    constructor(readonly workouts: Workout[]) {
    }
}

export class WorkoutDetailsEvent implements WorkoutsEvent {
    constructor(readonly workout: Workout) {
    }
}