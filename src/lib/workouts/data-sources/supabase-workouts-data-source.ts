import { client } from '../../supabase/supabase-client';
import type { WorkoutDao } from './workout-dao';
import type { WorkoutsDataSource } from './workouts-data-source';

export class SupabaseWorkoutsDataSource implements WorkoutsDataSource {

    async getAll(): Promise<WorkoutDao[]> {
        const response = await client.from('workouts').select().order('training_at', { ascending: false });
        return response.data ?? [];
    }

    async create(title: string): Promise<boolean> {
        const user = client.auth.user();
        if (user) {
            const response = await client.from('workouts').insert([{ title, user_id: user.id }]);
            return response.error == null;
        }
        return false;
    }

    async delete(id: number): Promise<boolean> {
        const response = await client.from('workouts').delete().match({ id });
        return response.error == null;
    }

    async getDetails(id: number): Promise<WorkoutDao[]> {
        const response = await client.from<WorkoutDao>('workouts')
            .select(`
            id,
            title,
            training_at,
            exercises:exercises(
                id,
                title,
                sets:sets(
                    id,
                    index, 
                    reps,
                    weight,
                    rest_time
                )
            )
            `)
            .filter('id', 'eq', id);
        return response.data ?? [];
    }

    async createExercise(workoutId: number, title: string): Promise<boolean> {
        const user = client.auth.user();
        if (user) {
            const response = await client.from('exercises').insert([{
                title,
                user_id: user.id,
                workout_id: workoutId
            }]);
            return response.error == null;
        }
        return false;
    }

    async deleteExercise(exerciseId: number): Promise<boolean> {
        const response = await client.from('exercises').delete().match({ id: exerciseId });
        return response.error == null;
    }

}