import type { WorkoutDao } from './workout-dao';

export interface WorkoutsDataSource {
    getAllWorkouts(): Promise<WorkoutDao[]>;
}