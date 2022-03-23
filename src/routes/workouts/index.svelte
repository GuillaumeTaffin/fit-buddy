<script lang='ts'>
    import { workoutsStore } from '../../lib/stores';
    import { onMount } from 'svelte';
    import Page from '../../lib/components/page/Page.svelte';
    import Column from '../../lib/components/Column.svelte';
    import WorkoutCard from '../../lib/workouts/pages/WorkoutCard.svelte';
    import Center from '../../lib/components/container/Center.svelte';
    import Card from '../../lib/components/Card.svelte';
    import TextField from '../../lib/components/TextField.svelte';
    import TextButton from '../../lib/components/button/TextButton.svelte';
    import { WorkoutsPageController } from '../../lib/workouts/pages/workouts-page/workouts-page-controller';
    import Dialog from '../../lib/components/modal/Dialog.svelte';

    let controller = new WorkoutsPageController(workoutsStore);
    let newTrainingTitle;

    onMount(() => {
        controller.getAllWorkouts();
    });

    $: showModal = $controller.showNewTrainingDialog;
    $: workouts = $controller.workouts;

</script>

<Page title='trainings'>

    <h1 class='p-4 text-xl font-semibold tracking-wider'>Last Trainings</h1>

    <Column crossAxisAlignment='center' gap='2' class='grow w-full p-4 overflow-y-scroll'>
        {#each workouts as workout (workout.id)}
            <WorkoutCard {workout} />
        {/each}
    </Column>

    <Center class='p-2'>
        <TextButton on:click={() => controller.openNewTrainingDialog()}>
            NEW TRAINING
        </TextButton>
    </Center>

    <Dialog {showModal} on:outclick={() => controller.closeNewTrainingDialog()}>
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
    </Dialog>


</Page>