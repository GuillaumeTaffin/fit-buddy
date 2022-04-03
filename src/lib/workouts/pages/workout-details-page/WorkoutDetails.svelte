<script lang='ts'>
    import { Workout } from '../../workout';
    import ExerciseCard from './ExerciseCard.svelte';
    import Column from '../../../components/Column.svelte';
    import Row from '../../../components/Row.svelte';
    import Calendar from 'svelte-material-icons/Calendar.svelte';


    export let workout: Workout;
</script>

<Column gap='4' class='px-4 overflow-y-auto'>
    <Row crossAxisAlignment='center' mainAxisAlignment='end' gap='2'>
        <Calendar size='1.5em' />
        <p>{workout.trainingAt.toLocaleDateString()}</p>
    </Row>

    <Column gap='2' class='overflow-y-auto'>
        {#each workout.exercises as exercise (exercise.id)}
            <ExerciseCard {exercise} workoutId={workout.id} />
        {/each}
    </Column>

</Column>
