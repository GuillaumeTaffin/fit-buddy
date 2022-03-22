import { client } from '../../supabase/supabase-client';
import type { WorkoutDao } from './workout-dao';
import type { WorkoutsDataSource } from './workouts-data-source';

export class SupabaseWorkoutsDataSource implements WorkoutsDataSource {

    private workouts = client.from('workouts');

    async getAll(): Promise<WorkoutDao[]> {
        const response = await this.workouts.select('*');
        return response.data ?? [];
    }

    async create(title: string): Promise<boolean> {
        const user = client.auth.user();
        if (user) {
            const response = await this.workouts.insert([{ title, user_id: user.id }]);
            return response.error == null;
        }
        return false;
    }

    async delete(id: bigint): Promise<boolean> {
        const response = await this.workouts.delete().match({ id });
        return response.error == null;
    }

}