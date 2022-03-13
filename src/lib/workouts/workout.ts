export class Workout {
    constructor(readonly id: bigint, readonly title: string, readonly trainingAt: Date, readonly exercises: Exercise[]) {
    }
}

export class Exercise {
    constructor(readonly id: bigint, readonly title: string, readonly sets: Set[]) {
    }
}

export class Set {
    constructor(readonly id: bigint, readonly index: number, readonly weight: number, readonly reps: number, readonly rest: number) {
    }
}