<script lang='ts'>
    import { Workout } from '../../workout';
    import ExerciseCard from './ExerciseCard.svelte';
    import Column from '../../../components/Column.svelte';
    import Row from '../../../components/Row.svelte';
    import Calendar from 'svelte-material-icons/Calendar.svelte';


    export let workout: Workout;
</script>

<Column class='px-3 pb-2' gap='4'>
    <Row crossAxisAlignment='center' gap='2'>
        <Calendar size='1.5em' />
        <p class='text-sm tracking-wider text-white/75'>{workout.trainingAt.toLocaleDateString()}</p>
    </Row>
    <h2 class='text-base font-medium tracking-widest'>EXERCISES</h2>
</Column>

<Column gap='2' class='grow overflow-y-auto px-3'>
    {#each workout.exercises as exercise (exercise.id)}
        <ExerciseCard {exercise} workoutId={workout.id} />
    {/each}
</Column>

