/* eslint-disable @typescript-eslint/no-empty-interface */
import type { Workout } from '../workout';

export interface WorkoutsEvents {
}

export class AllWorkoutsEvent implements WorkoutsEvents {
    constructor(readonly workouts: Workout[]) {
    }
}