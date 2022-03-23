<script lang='ts'>
    import Card from '../../../components/Card.svelte';
    import { Exercise } from '../../workout';

    export let exercise: Exercise;
</script>

<Card class='bg-white/75 px-4 py-2 max-w-md'>
    <h2 class='text-black text-lg font-medium'>{exercise.title}</h2>
    <div class='grid grid-cols-4 w-full'>
        <p class='text-black/75'>#</p>
        <p class='text-black/75'>Reps</p>
        <p class='text-black/75'>Weight</p>
        <p class='text-black/75'>Rest</p>
        {#each exercise.sets as set (set.id)}
            <p class='text-black'>{set.index}</p>
            <p class='text-black'>{set.reps}</p>
            <p class='text-black'>{set.weight}</p>
            <p class='text-black'>{set.rest}</p>
        {/each}
    </div>

</Card>