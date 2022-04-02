import type { Readable, Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { WorkoutDetailsPageState } from './workout-details-page-state';
import type { WorkoutsStore } from '../../service/workouts-store';
import type { Subscriber, Unsubscriber } from 'svelte/types/runtime/store';
import type { WorkoutsEvent } from '../../service/workouts-event';
import { WorkoutDetailsEvent } from '../../service/workouts-event';

export const key = Symbol();

export class WorkoutDetailsPageController implements Readable<WorkoutDetailsPageState> {
    private readonly state: Writable<WorkoutDetailsPageState>;

    constructor(private readonly service: WorkoutsStore) {
        this.state = writable(new WorkoutDetailsPageState());
        service.subscribe(e => this.handleWorkoutsEvents(e));
    }

    private handleWorkoutsEvents(event: WorkoutsEvent) {
        if (event instanceof WorkoutDetailsEvent) {
            this.state.update(() => new WorkoutDetailsPageState(event.workout));
        }
    }

    subscribe(run: Subscriber<WorkoutDetailsPageState>): Unsubscriber {
        return this.state.subscribe(run);
    }

    async getDetails(id: number) {
        await this.service.getDetails(id);
    }

    async delete(id: number) {
        await this.service.delete(id);
    }

    async createExercise(workoutId: number, title: string) {
        await this.service.createExercise(workoutId, title);
    }

    async deleteExercise(workoutId: number, exerciseId: number) {
        await this.service.deleteExercise(workoutId, exerciseId);
    }

    async createSet(workoutId: number, exerciseId: number, setIndex: number) {
        await this.service.createSet(workoutId, exerciseId, setIndex);
    }
}