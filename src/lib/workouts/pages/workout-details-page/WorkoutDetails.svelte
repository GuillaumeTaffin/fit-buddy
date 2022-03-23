<script lang='ts'>
    import { Workout } from '../../workout';
    import ExerciseCard from './ExerciseCard.svelte';
    import Column from '../../../components/Column.svelte';

    export let workout: Workout;
</script>

<Column gap='2' class='p-4'>
    <h1 class='text-2xl font-bold tracking-wider'>{workout.title}</h1>
    <p>{workout.trainingAt}</p>

    {#each workout.exercises as exercise (exercise.id)}
        <ExerciseCard {exercise} />
    {/each}
</Column>
