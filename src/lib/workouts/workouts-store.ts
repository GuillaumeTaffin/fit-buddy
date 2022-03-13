import type { WorkoutsDataSource } from './workouts-data-source';
import { WorkoutsRepository } from './workouts-repository';
import type { Subscriber, Unsubscriber } from 'svelte/types/runtime/store';
import type { Workout } from './workout';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export class WorkoutsStore {
    private readonly repository;
    private readonly state: Writable<Workout[]>;

    constructor(dataSource: WorkoutsDataSource) {
        this.repository = new WorkoutsRepository(dataSource);
        this.state = writable([]);
    }

    subscribe(run: Subscriber<Workout[]>): Unsubscriber {
        return this.state.subscribe(run);
    }

    async getAllWorkouts() {
        const workouts = await this.repository.getAllWorkouts();
        this.state.set(workouts);
    }

}