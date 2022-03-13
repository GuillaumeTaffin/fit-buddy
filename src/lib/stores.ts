import { UserStore } from './user/user-store';
import { WorkoutsStore } from './workouts/workouts-store';
import { SupabaseWorkoutsDataSource } from './workouts/supabase-workouts-data-source';

export const userStore = new UserStore();

export const workoutsStore = new WorkoutsStore(new SupabaseWorkoutsDataSource());