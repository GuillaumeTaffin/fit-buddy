import type { WorkoutsDataSource } from '../../../../src/lib/workouts/data-sources/workouts-data-source';
import type { WorkoutDao } from '../../../../src/lib/workouts/data-sources/workout-dao';

export class FakeWorkoutsDataSource implements WorkoutsDataSource {
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