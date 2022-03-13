/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { WorkoutsStore } from '../../../src/lib/workouts/workouts-store';
import type { WorkoutsDataSource } from '../../../src/lib/workouts/workouts-data-source';
import type { WorkoutDao } from '../../../src/lib/workouts/workout-dao';
import { Exercise, Set, Workout } from '../../../src/lib/workouts/workout';

test('Get all workouts', async () => {
    const store = new WorkoutsStore(new FakeWorkoutsDataSource());
    let workouts: Workout[];
    store.subscribe(state => workouts = state);
    await store.getAllWorkouts();
    expect(workouts!).toEqual([
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

class FakeWorkoutsDataSource implements WorkoutsDataSource {
    getAllWorkouts(): Promise<WorkoutDao[]> {
        return Promise.resolve([
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
        ]);
    }

}