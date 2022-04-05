<script lang='ts'>
    import { workoutsStore } from '../../lib/stores';
    import { onMount } from 'svelte';
    import Page from '../../lib/components/page/Page.svelte';
    import Column from '../../lib/components/Column.svelte';
    import WorkoutCard from '../../lib/workouts/pages/WorkoutCard.svelte';
    import TextField from '../../lib/components/TextField.svelte';
    import { WorkoutsPageController } from '../../lib/workouts/pages/workouts-page/workouts-page-controller';
    import Dialog from '../../lib/components/modal/Dialog.svelte';
    import ActionButton from '../../lib/workouts/pages/workout-details-page/ActionButton.svelte';

    let controller = new WorkoutsPageController(workoutsStore);
    let newTrainingTitle;

    onMount(() => {
        controller.getAllWorkouts();
    });

    $: workouts = $controller.workouts;

    let newTrainingDialog;

</script>

<Page title='trainings'>

    <Column crossAxisAlignment='center' gap='2' class='grow w-full p-4 overflow-y-scroll'>
        {#each workouts as workout (workout.id)}
            <WorkoutCard {workout} />
        {/each}
    </Column>

    <svelte:fragment slot='actionBar'>
        <ActionButton label='TRAINING' icon='add_circle_outline' on:click={() => newTrainingDialog.show()} />
    </svelte:fragment>

</Page>


<Dialog bind:this={newTrainingDialog}
        on:ok={() => controller.createWorkout(newTrainingTitle)}
        okText='CREATE'>
    <h1 class='text-black font-semibold tracking-wide'>NEW TRAINING</h1>
    <TextField type='text'
               hint='Training title'
               outlined={true}
               bind:text={newTrainingTitle}
    />
</Dialog>