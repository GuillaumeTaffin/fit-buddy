import type { Workout } from '../../workout';

export class WorkoutsPageState {
    constructor(readonly workouts: Workout[]) {
    }
}