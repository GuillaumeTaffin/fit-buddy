import type { WorkoutDao } from './workout-dao';

export interface WorkoutsDataSource {
    getAllWorkouts(): Promise<WorkoutDao[]>;

    save(title: string): Promise<boolean>;

    delete(id: bigint): Promise<boolean>;
}