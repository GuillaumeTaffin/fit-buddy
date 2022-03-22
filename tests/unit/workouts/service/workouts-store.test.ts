/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { WorkoutsStore } from '../../../../src/lib/workouts/service/workouts-store';
import { Exercise, Set, Workout } from '../../../../src/lib/workouts/workout';
import type { AllWorkoutsEvent } from '../../../../src/lib/workouts/service/workouts-event';
import { get } from 'svelte/store';
import { FakeWorkoutsDataSource } from '../data-sources/fake-workouts-data-source';

test('Get all workouts', async () => {
    const store = new WorkoutsStore(new FakeWorkoutsDataSource());
    await store.getAllWorkouts();
    const event: AllWorkoutsEvent = get(store) as AllWorkoutsEvent;
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
    await store.save('my new workout');
    const event: AllWorkoutsEvent = get(store) as AllWorkoutsEvent;
    expect(event!.workouts.length).toEqual(2);
    expect(event!.workouts[1].title).toEqual('my new workout');
});

test('Delete workout', async () => {
    const store = new WorkoutsStore(new FakeWorkoutsDataSource());
    await store.delete(BigInt(22));
    const event: AllWorkoutsEvent = get(store) as AllWorkoutsEvent;
    expect(event!.workouts.length).toEqual(0);
});
