import type { Workout } from '../../workout';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export class WorkoutDetailsPageState {
    constructor(readonly workout?: Workout) {
    }
}
