import type { WorkoutDao } from './workout-dao';

export interface WorkoutsDataSource {
    getAll(): Promise<WorkoutDao[]>;

    create(title: string): Promise<boolean>;

    delete(id: number): Promise<boolean>;

    getDetails(id: number): Promise<WorkoutDao[]>;

    createExercise(workoutId: number, title: string): Promise<boolean>;

    deleteExercise(exerciseId: number): Promise<boolean>;
}