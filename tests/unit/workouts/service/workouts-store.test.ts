/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { WorkoutsStore } from '../../../../src/lib/workouts/service/workouts-store';
import type { WorkoutsDataSource } from '../../../../src/lib/workouts/data-sources/workouts-data-source';
import type { WorkoutDao } from '../../../../src/lib/workouts/data-sources/workout-dao';
import { Exercise, Set, Workout } from '../../../../src/lib/workouts/workout';
import { AllWorkoutsEvent } from '../../../../src/lib/workouts/service/workouts-events';

test('Get all workouts', async () => {
    const store = new WorkoutsStore(new FakeWorkoutsDataSource());
    let event: AllWorkoutsEvent;
    store.subscribe(state => {
        if (state instanceof AllWorkoutsEvent) event = state;
    });
    await store.getAllWorkouts();
    expect(event!.workouts).toEqual([
        new Workout(
            BigInt(22),
            'workout 1',
            new Date(2042),
            [
                new Exercise(
                    BigInt(3),
                    'exo 1',
                    [
                        new Set(
                            BigInt(4),
                            6,
                            89.5,
                            15,
                            90
                        )
                    ]
                )
            ]
        )
    ]);
});

test('Save new workout', async () => {
    const store = new WorkoutsStore(new FakeWorkoutsDataSource());
    let event: AllWorkoutsEvent;
    store.subscribe(state => {
        if (state instanceof AllWorkoutsEvent) event = state;
    });
    await store.save('my new workout');
    expect(event!.workouts.length).toEqual(2);
    expect(event!.workouts[1].title).toEqual('my new workout');
});

test('Delete workout', async () => {
    const store = new WorkoutsStore(new FakeWorkoutsDataSource());
    let event: AllWorkoutsEvent;
    store.subscribe(state => {
        if (state instanceof AllWorkoutsEvent) event = state;
    });
    await store.delete(BigInt(22));
    expect(event!.workouts.length).toEqual(0);
});

class FakeWorkoutsDataSource implements WorkoutsDataSource {
    private workouts = [
        {
            id: BigInt(22),
            title: 'workout 1',
            training_at: new Date(2042).toISOString(),
            exercises: [
                {
                    id: BigInt(3),
                    title: 'exo 1',
                    sets: [
                        {
                            id: BigInt(4),
                            index: 6,
                            weight: 89.5,
                            reps: 15,
                            rest_time: 90
                        }
                    ]
                }
            ]
        }
    ];

    constructor(private readonly saveSuccess: boolean = true) {
    }

    async delete(id: bigint): Promise<boolean> {
        this.workouts = this.workouts.filter((e) => e.id !== id);
        return true;
    }

    create(title: string): Promise<boolean> {
        if (this.saveSuccess) {
            this.workouts.push({
                id: BigInt(42),
                title: title,
                training_at: new Date(2043).toISOString(),
                exercises: []
            });
        }
        return Promise.resolve(this.saveSuccess);
    }

    getAll(): Promise<WorkoutDao[]> {
        return Promise.resolve(this.workouts);
    }

}