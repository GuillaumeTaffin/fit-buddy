export type WorkoutDao = {
    id: bigint,
    title: string,
    training_at: string,
    exercises: ExerciseDao[]
}

export type ExerciseDao = {
    id: bigint,
    title: string,
    sets: SetDao[],
}

export type SetDao = {
    id: bigint,
    index: number,
    weight: number,
    reps: number,
    rest_time: number,
}