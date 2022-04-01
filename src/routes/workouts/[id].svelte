<script>
    import Page from '../../lib/components/page/Page.svelte';
    import { page } from '$app/stores';
    import { workoutDetailsController } from '../../lib/stores';
    import { onMount } from 'svelte';
    import WorkoutDetails from '../../lib/workouts/pages/workout-details-page/WorkoutDetails.svelte';
    import TextButton from '../../lib/components/button/TextButton.svelte';
    import Dialog from '../../lib/components/modal/Dialog.svelte';
    import { goto } from '$app/navigation';
    import Row from '../../lib/components/Row.svelte';
    import TextField from '../../lib/components/TextField.svelte';

    const workoutId = parseInt($page.params.id);

    const controller = workoutDetailsController;

    onMount(() => {
        controller.getDetails(workoutId);
    });

    $: title = $controller.workout?.title ?? 'Loading...';

    const deleteWorkout = async () => {
        await controller.delete(workoutId);
        await goto('/workouts');
    };

    let deleteTrainingDialog;
    let newExerciseDialog;

    let newExerciseTitle = '';
</script>

<Page {title}>
    <div class='grow overflow-y-auto'>
        {#if $controller.workout}
            <WorkoutDetails workout={$controller.workout} />
        {/if}
    </div>

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
</Page>