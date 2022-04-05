<script>
    import Page from '../../../lib/components/page/Page.svelte';
    import { page } from '$app/stores';
    import { onMount, setContext } from 'svelte';
    import WorkoutDetails from '../../../lib/workouts/pages/workout-details-page/WorkoutDetails.svelte';
    import {
        key,
        WorkoutDetailsPageController
    } from '../../../lib/workouts/pages/workout-details-page/workout-details-page-controller';
    import { workoutsStore } from '../../../lib/stores';
    import { goto } from '$app/navigation';
    import Dialog from '../../../lib/components/modal/Dialog.svelte';
    import TextField from '../../../lib/components/TextField.svelte';
    import ActionButton from '../../../lib/workouts/pages/workout-details-page/ActionButton.svelte';

    const workoutId = parseInt($page.params.workoutId);

    const controller = new WorkoutDetailsPageController(workoutsStore);
    setContext(key, controller);

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
    {#if $controller.workout}
        <WorkoutDetails workout={$controller.workout} />
    {/if}

    <svelte:fragment slot='actionBar'>
        <ActionButton label='TRAINING' icon='delete' on:click={() => deleteTrainingDialog.show()} />
        <ActionButton label='EXERCISE' icon='add_circle_outline' on:click={() => newExerciseDialog.show()} />
    </svelte:fragment>

</Page>


<Dialog bind:this={newExerciseDialog}
        on:ok={() => controller.createExercise(workoutId, newExerciseTitle)}
        okText='CREATE'>

    <h1 class='text-black font-semibold tracking-wide'>CREATE EXERCISE</h1>
    <TextField hint='Title' outlined={true} bind:text={newExerciseTitle} />

</Dialog>


<Dialog bind:this={deleteTrainingDialog}
        on:ok={deleteWorkout}
        okBackgroundColor='danger'
        okText='DELETE'>

    <h1 class='text-black font-semibold tracking-wide'>DELETE TRAINING</h1>
    <p class='text-black'>Do you really want to delete this training ? You will not be able to recover it
        later.</p>

</Dialog>