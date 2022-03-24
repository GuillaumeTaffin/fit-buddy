import type { WorkoutDao } from './workout-dao';

export interface WorkoutsDataSource {
    getAll(): Promise<WorkoutDao[]>;

    create(title: string): Promise<boolean>;

    delete(id: bigint): Promise<boolean>;

    getDetails(id: bigint): Promise<WorkoutDao[]>;
}