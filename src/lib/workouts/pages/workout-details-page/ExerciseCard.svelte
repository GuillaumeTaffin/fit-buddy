<script lang='ts'>
    import Card from '../../../components/Card.svelte';
    import { Exercise } from '../../workout';
    import Column from '../../../components/Column.svelte';
    import { goto } from '$app/navigation';

    export let exercise: Exercise;
    export let workoutId: number;

    $: totalReps = exercise?.sets.map(s => s.reps).reduce((sum, current) => sum + current, 0) ?? 0;
    $: totalWeight = exercise?.sets.map(s => s.weight).reduce((sum, current) => sum + current, 0) ?? 0;
</script>

<Card class='bg-white/75 px-4 py-2 max-w-md'
      on:click={() => goto(`/workouts/${workoutId}/exercise/${exercise.id}`)}>
    <Column>
        <h2 class='text-black text-md font-medium'>{exercise.title.toUpperCase()}</h2>
        <p class='text-black/50 text-xs text-right'>
            {exercise.sets.length} sets -
            {totalReps} reps -
            {totalWeight} lb
        </p>
    </Column>

</Card>
