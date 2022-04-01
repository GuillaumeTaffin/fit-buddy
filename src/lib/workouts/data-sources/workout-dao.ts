export class WorkoutDao {
    constructor(readonly id: number,
                readonly title: string,
                readonly training_at: string,
                readonly exercises?: ExerciseDao[]) {
    }
}

export class ExerciseDao {
    constructor(readonly id: number,
                readonly title: string,
                readonly sets: SetDao[]) {
    }
}

export class SetDao {
    constructor(readonly id: number,
                readonly index: number,
                readonly weight: number,
                readonly reps: number,
                readonly rest_time: number) {
    }
}