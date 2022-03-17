import { UserStore } from './user/user-store';
import { WorkoutsStore } from './workouts/workouts-store';
import { SupabaseWorkoutsDataSource } from './workouts/supabase-workouts-data-source';
import watchMedia from 'svelte-media';

export const userStore = new UserStore();

export const workoutsStore = new WorkoutsStore(new SupabaseWorkoutsDataSource());

const mediaQueries = {
    small: '(max-width: 849px)',
    large: '(min-width: 850px)',
    short: '(max-height: 399px)',
    landscape: '(orientation: landscape) and (max-height: 499px)',
    tiny: '(orientation: portrait) and (max-height: 599px)',
    dark: '(prefers-color-scheme: dark)',
    noanimations: '(prefers-reduced-motion: reduce)'
};

export const mediaStore = watchMedia(mediaQueries);