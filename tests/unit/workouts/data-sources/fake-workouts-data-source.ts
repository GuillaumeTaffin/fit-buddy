import type { WorkoutsDataSource } from '../../../../src/lib/workouts/data-sources/workouts-data-source';
import { ExerciseDao, WorkoutDao } from '../../../../src/lib/workouts/data-sources/workout-dao';

export class FakeWorkoutsDataSource implements WorkoutsDataSource {
    private workouts: WorkoutDao[] = [
        {
            id: 22,
            title: 'workout 1',
            training_at: new Date(2042).toISOString(),
            exercises: [
                {
                    id: 3,
                    title: 'exo 1',
                    sets: [
                        {
                            id: 4,
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

    async delete(id: number): Promise<boolean> {
        this.workouts = this.workouts.filter((e) => e.id !== id);
        return true;
    }

    create(title: string): Promise<boolean> {
        if (this.saveSuccess) {
            this.workouts.push({
                id: 42,
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

    getDetails(id: number): Promise<WorkoutDao[]> {
        return Promise.resolve(this.workouts.filter(e => e.id === id));
    }

    async createExercise(workoutId: number, title: string): Promise<boolean> {
        this.workouts = this.workouts.map(w => {
            if (w.id === workoutId) {
                const exos = w.exercises ?? [];
                exos.push(new ExerciseDao(73, title, []));
                return new WorkoutDao(w.id, w.title, w.training_at, exos);
            }
            return w;
        });
        return true;
    }

}