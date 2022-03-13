import { client } from '../supabase/supabase-client';
import type { WorkoutDao } from './workout-dao';
import type { WorkoutsDataSource } from './workouts-data-source';

export class SupabaseWorkoutsDataSource implements WorkoutsDataSource {
    async getAllWorkouts(): Promise<WorkoutDao[]> {
        const response = await client.from<WorkoutDao>('workouts').select(`
            id,
            title,
            training_at,
            exercises:exercises(
              id,
              title,
              sets:sets(
                id,
                index,
                weight,
                reps,
                rest_time
              )
            )
            `);
        return response.data ?? [];
    }

}