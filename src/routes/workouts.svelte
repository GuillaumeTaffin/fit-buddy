<script lang='ts'>
    import { workoutsStore } from '../lib/stores';
    import { onMount } from 'svelte';

    onMount(() => {
        workoutsStore.getAllWorkouts();
    });

    $: workouts = $workoutsStore;
</script>

{#each workouts as workout (workout.id)}
    <p>{workout.title}</p>
    <p>{workout.trainingAt}</p>
{/each}