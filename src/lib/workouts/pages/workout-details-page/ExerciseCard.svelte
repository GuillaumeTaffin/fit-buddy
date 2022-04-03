<script lang='ts'>
    import Card from '../../../components/Card.svelte';
    import { Exercise } from '../../workout';
    import TextButton from '../../../components/button/TextButton.svelte';
    import Column from '../../../components/Column.svelte';
    import Row from '../../../components/Row.svelte';
    import Dialog from '../../../components/modal/Dialog.svelte';
    import { key, WorkoutDetailsPageController } from './workout-details-page-controller';
    import { getContext } from 'svelte';
    import { goto } from '$app/navigation';

    export let exercise: Exercise;
    export let workoutId: number;

    let controller: WorkoutDetailsPageController = getContext(key);

    let deleteExerciseDialog;

</script>

<Card class='bg-white/75 px-4 py-2 max-w-md shadow-none'>
    <Column>
        <h2 class='text-black text-md font-medium'>{exercise.title.toUpperCase()}</h2>

        <Row mainAxisAlignment='end'>
            <TextButton priority='LOW' backgroundColor='danger' size='xs' on:click={() => deleteExerciseDialog.show()}>
                DELETE
            </TextButton>
            <TextButton priority='LOW' size='xs'
                        on:click={() => goto(`/workouts/${workoutId}/exercise/${exercise.id}`)}>EDIT
            </TextButton>
        </Row>
    </Column>

</Card>

<Dialog bind:this={deleteExerciseDialog}
        on:ok={() => controller.deleteExercise(workoutId, exercise.id)}
        okBackgroundColor='danger'
        okText='DELETE'>

    <h1 class='text-black font-semibold tracking-wide'>DELETE '{exercise.title.toUpperCase()}'</h1>
    <p class='text-black'>Do you really want to delete this exercise ? You will not be able to recover it
        later.</p>

</Dialog>
