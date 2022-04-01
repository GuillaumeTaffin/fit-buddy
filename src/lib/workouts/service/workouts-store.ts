import type { WorkoutsDataSource } from '../data-sources/workouts-data-source';
import { WorkoutsRepository } from './workouts-repository';
import type { Subscriber, Unsubscriber } from 'svelte/types/runtime/store';
import type { Readable, Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import type { WorkoutsEvent } from './workouts-event';
import { AllWorkoutsEvent, WorkoutDetailsEvent } from './workouts-event';

export class WorkoutsStore implements Readable<WorkoutsEvent> {
    private readonly repository;
    private readonly state: Writable<WorkoutsEvent>;

    constructor(dataSource: WorkoutsDataSource) {
        this.repository = new WorkoutsRepository(dataSource);
        this.state = writable();
    }

    subscribe(run: Subscriber<WorkoutsEvent>): Unsubscriber {
        return this.state.subscribe(run);
    }

    async getAllWorkouts() {
        const workouts = await this.repository.getAllWorkouts();
        this.state.set(new AllWorkoutsEvent(workouts));
    }

    async save(title: string) {
        const success = await this.repository.create(title);
        if (success) {
            await this.getAllWorkouts();
        }
    }

    async delete(id: number) {
        const success = await this.repository.delete(id);
        if (success) {
            await this.getAllWorkouts();
        }
    }

    async getDetails(id: number) {
        const workout = await this.repository.getDetails(id);
        this.state.set(new WorkoutDetailsEvent(workout));
    }

    async createExercise(workoutId: number, title: string) {
        const success = await this.repository.createExercise(workoutId, title);
        if (success) {
            await this.getDetails(workoutId);
        }
    }

    async deleteExercise(workoutId: number, exerciseId: number) {
        const success = await this.repository.deleteExercise(exerciseId);
        if (success) {
            await this.getDetails(workoutId);
        }
    }
}