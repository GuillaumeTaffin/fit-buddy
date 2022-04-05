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
    import WorkoutActions from '../../../lib/workouts/pages/workout-details-page/WorkoutActions.svelte';
    import { goto } from '$app/navigation';
    import Dialog from '../../../lib/components/modal/Dialog.svelte';
    import Row from '../../../lib/components/Row.svelte';

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

</script>

<Page {title}>
    <Row mainAxisAlignment='end'>
        <span class='material-icons-outlined text-2xl text-primary/75 text-right px-3'
              on:click={() => deleteTrainingDialog.show()}>
            folder_delete
        </span>
    </Row>

    {#if $controller.workout}
        <WorkoutDetails workout={$controller.workout} />
    {/if}

    <WorkoutActions {workoutId} />

</Page>


<Dialog bind:this={deleteTrainingDialog}
        on:ok={deleteWorkout}
        okBackgroundColor='danger'
        okText='DELETE'>

    <h1 class='text-black font-semibold tracking-wide'>DELETE TRAINING</h1>
    <p class='text-black'>Do you really want to delete this training ? You will not be able to recover it
        later.</p>

</Dialog>