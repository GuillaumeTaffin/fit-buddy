<script lang='ts'>
    import { Workout } from '../../workout';
    import ExerciseCard from './ExerciseCard.svelte';
    import Column from '../../../components/Column.svelte';
    import Row from '../../../components/Row.svelte';


    export let workout: Workout;
</script>

<Column gap='2' class='px-4 pt-4 overflow-y-auto'>
    <Row crossAxisAlignment='center' mainAxisAlignment='between'>
        <h1 class='text-2xl font-bold tracking-wider'>{workout.title}</h1>
        <p>{workout.trainingAt.toLocaleDateString()}</p>
    </Row>

    <Column gap='2' class='overflow-y-auto'>
        {#each workout.exercises as exercise (exercise.id)}
            <ExerciseCard {exercise} workoutId={workout.id} />
        {/each}
    </Column>

</Column>
