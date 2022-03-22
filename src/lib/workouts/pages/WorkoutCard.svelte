<script lang='ts'>
    import { Workout } from '../workout';
    import Card from '../../components/Card.svelte';
    import Column from '../../components/Column.svelte';
    import { goto } from '$app/navigation';

    export let workout: Workout;

</script>

<Card on:click={() => goto(`/workouts/${workout.id}`)} class='px-4 py-2 w-full max-w-md bg-white/75'>
    <Column crossAxisAlignment='start'>
        <p class='text-xl font-semibold text-black tracking-wide'>{workout.title}</p>
        <p class='text-sm font-medium text-black/75'>{workout.trainingAt.toLocaleString()}</p>
    </Column>
</Card>