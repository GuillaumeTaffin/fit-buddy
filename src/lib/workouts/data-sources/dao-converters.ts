import type { ExerciseDao, SetDao, WorkoutDao } from './workout-dao';
import { Exercise, Set, Workout } from '../workout';

export function mapWorkout(workout: WorkoutDao): Workout {
    return new Workout(
        workout.id,
        workout.title,
        new Date(workout.training_at),
        workout.exercises?.map(mapExercise) ?? []
    );
}

export function mapExercise(exo: ExerciseDao): Exercise {
    return new Exercise(
        exo.id,
        exo.title,
        exo.sets.map(mapSet)
    );
}

export function mapSet(set: SetDao): Set {
    return new Set(
        set.id,
        set.index,
        set.weight,
        set.reps,
        set.rest_time
    );
}