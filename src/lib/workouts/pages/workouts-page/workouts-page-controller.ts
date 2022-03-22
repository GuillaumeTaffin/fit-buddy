import type { Readable, Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { WorkoutsPageState } from './workouts-page-state';
import type { WorkoutsStore } from '../../service/workouts-store';
import type { WorkoutsEvent } from '../../service/workouts-event';
import { AllWorkoutsEvent } from '../../service/workouts-event';
import type { Subscriber, Unsubscriber } from 'svelte/types/runtime/store';

export class WorkoutsPageController implements Readable<WorkoutsPageState> {
    private readonly state: Writable<WorkoutsPageState>;

    constructor(private workoutsStore: WorkoutsStore) {
        this.state = writable(new WorkoutsPageState([], false));
        workoutsStore.subscribe((e) => this.handleWorkoutsEvents(e));
    }

    private handleWorkoutsEvents(workoutsEvent: WorkoutsEvent) {
        if (workoutsEvent instanceof AllWorkoutsEvent) {
            this.state.set(new WorkoutsPageState(workoutsEvent.workouts, false));
        }
    }

    subscribe(run: Subscriber<WorkoutsPageState>): Unsubscriber {
        return this.state.subscribe(run);
    }

    async getAllWorkouts() {
        await this.workoutsStore.getAllWorkouts();
    }

    async createWorkout(title: string) {
        await this.workoutsStore.save(title);
    }

    async openNewTrainingDialog() {
        this.state.update((old) => new WorkoutsPageState(old.workouts, true));
    }

    async closeNewTrainingDialog() {
        this.state.update((old) => new WorkoutsPageState(old.workouts, false));
    }
}