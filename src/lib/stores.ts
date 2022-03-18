import { UserStore } from './user/user-store';
import { WorkoutsStore } from './workouts/workouts-store';
import { SupabaseWorkoutsDataSource } from './workouts/supabase-workouts-data-source';
import { MediaStore } from './media/media-store';

export const userStore = new UserStore();

export const workoutsStore = new WorkoutsStore(new SupabaseWorkoutsDataSource());

export const mediaStore = new MediaStore();