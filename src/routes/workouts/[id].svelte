<script>
    import Page from '../../lib/components/page/Page.svelte';
    import { page } from '$app/stores';
    import {
        WorkoutDetailsPageController
    } from '../../lib/workouts/pages/workout-details-page/workout-details-page-controller';
    import { workoutsStore } from '../../lib/stores';
    import { onMount } from 'svelte';
    import WorkoutDetails from '../../lib/workouts/pages/workout-details-page/WorkoutDetails.svelte';
    import Center from '../../lib/components/container/Center.svelte';
    import TextButton from '../../lib/components/button/TextButton.svelte';
    import Dialog from '../../lib/components/modal/Dialog.svelte';
    import { goto } from '$app/navigation';

    const workoutId = parseInt($page.params.id);

    const controller = new WorkoutDetailsPageController(workoutsStore);

    onMount(() => {
        controller.getDetails(workoutId);
    });

    $: title = $controller.workout?.title ?? 'Loading...';
    $: showModal = $controller.showDeleteDialog;

    const deleteWorkout = async () => {
        await controller.delete(workoutId);
        await goto('/workouts');
    };
</script>

<Page {title}>
    <div class='grow overflow-y-auto'>
        {#if $controller.workout}
            <WorkoutDetails workout={$controller.workout} />
        {/if}
    </div>

    <Center class='p-2'>
        <TextButton on:click={() => controller.openDeleteTrainingDialog()}>
            DELETE TRAINING
        </TextButton>
    </Center>

    <Dialog {showModal}
            onCancel={() => controller.closeDeleteTrainingDialog()}
            onOk={deleteWorkout}
            okBackgroundColor='danger'
            okText='DELETE'>

        <h1 class='text-black font-semibold tracking-wide'>DELETE TRAINING</h1>
        <p class='text-black'>Do you really want to delete this training ? You will not be able to recover it
            later.</p>

    </Dialog>
</Page>