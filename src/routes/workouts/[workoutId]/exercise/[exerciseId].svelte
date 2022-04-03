<script>
    import { page } from '$app/stores';
    import { workoutsStore } from '../../../../lib/stores';
    import {
        key,
        WorkoutDetailsPageController
    } from '../../../../lib/workouts/pages/workout-details-page/workout-details-page-controller';
    import { onMount, setContext } from 'svelte';
    import Page from '../../../../lib/components/page/Page.svelte';
    import ExerciseDetailsCard from '../../../../lib/workouts/pages/workout-details-page/ExerciseDetailsCard.svelte';
    import TextButton from '../../../../lib/components/button/TextButton.svelte';
    import Dialog from '../../../../lib/components/modal/Dialog.svelte';
    import Row from '../../../../lib/components/Row.svelte';

    const workoutId = parseInt($page.params.workoutId);
    const exerciseId = parseInt($page.params.exerciseId);

    const controller = new WorkoutDetailsPageController(workoutsStore);
    setContext(key, controller);

    onMount(() => {
        controller.getDetails(workoutId);
    });

    let deleteExerciseDialog;

    $: workout = $controller.workout;
    $: exercise = workout?.exercises.find(e => e.id === exerciseId);
    $: title = exercise?.title ?? 'Loading...';

</script>

<Page {title}>
    <div class='p-4 grow'>
        {#if exercise}
            <ExerciseDetailsCard {exercise} workoutId={workoutId} />
        {/if}
    </div>

    <Row mainAxisAlignment='center'>
        <TextButton size='sm' on:click={() => deleteExerciseDialog.show()}>
            DELETE
        </TextButton>
    </Row>
</Page>


<Dialog bind:this={deleteExerciseDialog}
        on:ok={() => controller.deleteExercise(workoutId, exercise.id)}
        okBackgroundColor='danger'
        okText='DELETE'>

    <h1 class='text-black font-semibold tracking-wide'>DELETE '{exercise.title.toUpperCase()}'</h1>
    <p class='text-black'>Do you really want to delete this exercise ? You will not be able to recover it
        later.</p>

</Dialog>