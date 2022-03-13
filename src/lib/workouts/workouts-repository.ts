import { Exercise, Set, Workout } from './workout';
import type { WorkoutsDataSource } from './workouts-data-source';

export class WorkoutsRepository {
    constructor(private readonly dataSource: WorkoutsDataSource) {
    }

    async getAllWorkouts(): Promise<Workout[]> {
        const dao = await this.dataSource.getAllWorkouts();
        return dao.map(value => new Workout(
            value.id,
            value.title,
            new Date(value.training_at),
            value.exercises.map(exo => new Exercise(
                exo.id,
                exo.title,
                exo.sets.map(set => new Set(
                    set.id,
                    set.index,
                    set.weight,
                    set.reps,
                    set.rest_time
                ))
            ))
        ));
    }
}