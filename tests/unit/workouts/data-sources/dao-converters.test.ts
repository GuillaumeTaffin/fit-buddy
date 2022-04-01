import type { WorkoutDao } from '../../../../src/lib/workouts/data-sources/workout-dao';
import { mapWorkout } from '../../../../src/lib/workouts/data-sources/dao-converters';

test('Convert workout without exercises', () => {
    const workoutDao: WorkoutDao = {
        id: 3,
        title: 'my workout',
        training_at: new Date(666).toISOString(),
        exercises: []
    };

    const workout = mapWorkout(workoutDao);
    expect(workout.id).toEqual(workoutDao.id);
    expect(workout.title).toEqual(workoutDao.title);
    expect(workout.trainingAt).toEqual(new Date(666));
    expect(workout.exercises).toEqual([]);
});

test('Undefined exercises are converted to empty list', () => {
    const workoutDao: WorkoutDao = {
        id: 56,
        title: 'my workout',
        training_at: new Date(666).toISOString(),
        exercises: undefined
    };
    const workout = mapWorkout(workoutDao);
    expect(workout.exercises).toEqual([]);
});