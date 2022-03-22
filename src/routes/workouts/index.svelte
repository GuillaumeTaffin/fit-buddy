<script lang='ts'>
    import { workoutsStore } from '../../lib/stores';
    import { onMount } from 'svelte';
    import Page from '../../lib/components/page/Page.svelte';
    import Column from '../../lib/components/Column.svelte';
    import WorkoutCard from '../../lib/workouts/pages/WorkoutCard.svelte';
    import Center from '../../lib/components/container/Center.svelte';
    import ElevatedButton from '../../lib/components/button/ElevatedButton.svelte';
    import Modal from '../../lib/components/modal/Modal.svelte';
    import Card from '../../lib/components/Card.svelte';
    import TextField from '../../lib/components/TextField.svelte';
    import TextButton from '../../lib/components/button/TextButton.svelte';
    import { WorkoutsPageController } from '../../lib/workouts/pages/workouts-page/workouts-page-controller';

    let controller = new WorkoutsPageController(workoutsStore);
    let newTrainingTitle;

    $: showModal = $controller.showNewTrainingDialog;

    onMount(() => {
        controller.getAllWorkouts();
    });

</script>

<Page title='trainings'>
    <Column crossAxisAlignment='center' gap='2' class='grow w-full py-4'>
        {#each $controller.workouts as workout (workout.id)}
            <WorkoutCard {workout} />
        {/each}
    </Column>

    <Center class='p-2'>
        <ElevatedButton on:click={() => controller.openNewTrainingDialog()}>
            NEW TRAINING
        </ElevatedButton>
    </Center>

    <Modal showModal={$controller.showNewTrainingDialog} on:outclick={() => controller.closeNewTrainingDialog()}>
        <Card shadow='none' class='bg-white p-4'>
            <Column gap='4' crossAxisAlignment='center'>
                <h1 class='text-black font-semibold tracking-wide'>NEW TRAINING</h1>
                <TextField type='text'
                           hint='Training title'
                           class='border border-primary-dark'
                           bind:text={newTrainingTitle}
                />
                <TextButton on:click={() => controller.createWorkout(newTrainingTitle)}>CREATE</TextButton>
            </Column>
        </Card>
    </Modal>


</Page>