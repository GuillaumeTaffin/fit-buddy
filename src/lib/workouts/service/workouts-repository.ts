import type { Workout } from '../workout';
import type { WorkoutsDataSource } from '../data-sources/workouts-data-source';
import { mapWorkout } from '../data-sources/dao-converters';

export class WorkoutsRepository {

    constructor(private readonly dataSource: WorkoutsDataSource) {
    }

    async getAllWorkouts(): Promise<Workout[]> {
        const dao = await this.dataSource.getAll();
        return dao.map(mapWorkout);
    }

    async create(title: string): Promise<boolean> {
        return await this.dataSource.create(title);
    }

    async delete(id: number): Promise<boolean> {
        return await this.dataSource.delete(id);
    }

    async getDetails(id: number): Promise<Workout> {
        const workouts = await this.dataSource.getDetails(id);
        return mapWorkout(workouts[0]);
    }

    async createExercise(workoutId: number, title: string): Promise<boolean> {
        return await this.dataSource.createExercise(workoutId, title);
    }

    async deleteExercise(exerciseId: number): Promise<boolean> {
        return await this.dataSource.deleteExercise(exerciseId);
    }

    async createSet(exerciseId: number, setIndex: number): Promise<boolean> {
        return await this.dataSource.createSet(exerciseId, setIndex);
    }
}