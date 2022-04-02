<script lang='ts'>
    import TextButton from '../../../components/button/TextButton.svelte';
    import Row from '../../../components/Row.svelte';
    import { goto } from '$app/navigation';
    import { key, WorkoutDetailsPageController } from './workout-details-page-controller';
    import { getContext } from 'svelte';
    import TextField from '../../../components/TextField.svelte';
    import Dialog from '../../../components/modal/Dialog.svelte';

    export let workoutId: number;

    let controller: WorkoutDetailsPageController = getContext(key);

    const deleteWorkout = async () => {
        await controller.delete(workoutId);
        await goto('/workouts');
    };

    let deleteTrainingDialog;
    let newExerciseDialog;

    let newExerciseTitle = '';
</script>

<Row class='p-2' mainAxisAlignment='center' gap='2'>
    <TextButton on:click={() => deleteTrainingDialog.show()}>
        DELETE TRAINING
    </TextButton>
    <TextButton on:click={() => newExerciseDialog.show()}>
        ADD EXERCISE
    </TextButton>
</Row>

<Dialog bind:this={deleteTrainingDialog}
        on:ok={deleteWorkout}
        okBackgroundColor='danger'
        okText='DELETE'>

    <h1 class='text-black font-semibold tracking-wide'>DELETE TRAINING</h1>
    <p class='text-black'>Do you really want to delete this training ? You will not be able to recover it
        later.</p>

</Dialog>

<Dialog bind:this={newExerciseDialog}
        on:ok={() => controller.createExercise(workoutId, newExerciseTitle)}
        okText='CREATE'>

    <h1 class='text-black font-semibold tracking-wide'>CREATE EXERCISE</h1>
    <TextField hint='Title' outlined={true} bind:text={newExerciseTitle} />

</Dialog>
