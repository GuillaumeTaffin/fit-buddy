<script>
    import { page } from '$app/stores';
    import { workoutsStore } from '../../../stores';
    import { key, WorkoutDetailsPageController } from '../workout-details-page/workout-details-page-controller';
    import { onMount, setContext } from 'svelte';
    import Page from '../../../../lib/components/page/Page.svelte';
    import Dialog from '../../../../lib/components/modal/Dialog.svelte';
    import Row from '../../../../lib/components/Row.svelte';
    import OutlinedButton from '../../../components/button/OutlinedButton.svelte';
    import Column from '../../../components/Column.svelte';
    import Card from '../../../components/Card.svelte';
    import SetInfo from './SetInfo.svelte';
    import TextButton from '../../../components/button/TextButton.svelte';
    import SetInput from './SetInput.svelte';

    const workoutId = parseInt($page.params.workoutId);
    const exerciseId = parseInt($page.params.exerciseId);

    const controller = new WorkoutDetailsPageController(workoutsStore);
    setContext(key, controller);

    onMount(() => {
        controller.getDetails(workoutId);
    });

    let deleteExerciseDialog;
    let createSetDialog;

    $: workout = $controller.workout;
    $: exercise = workout?.exercises.find(e => e.id === exerciseId);
    $: title = exercise?.title ?? 'Loading...';

    let newSetReps = 10;
    let newSetWeight = 50;
    let newSetRest = 90;

</script>

<Page {title}>
    <Column class='px-4 pb-2 grow' gap='4'>
        <Row mainAxisAlignment='end' class='pt-1'>
            <OutlinedButton size='xs' on:click={() => deleteExerciseDialog.show()}>
                DELETE
            </OutlinedButton>
        </Row>
        <Column class='grow' gap='2'>
            <Row gap='4'>
                <p>TEMPO</p>
                <p>1 0 1 0</p>
            </Row>
            <h2>SETS</h2>
            {#if exercise}
                {#if exercise.sets?.length}
                    {#each exercise.sets as set, i (set.id)}
                        <Card class='bg-white/75 p-4'>
                            <Row>
                                <div class='grow grid grid-cols-3 divide-x divide-black/50'>
                                    <SetInfo data={set.reps} label='REPS' />
                                    <SetInfo data={set.weight} label='WEIGHT' />
                                    <SetInfo data={set.rest} label='REST' />
                                </div>
                                <span class='material-icons-outlined text-md text-primary/50'>edit</span>
                            </Row>
                        </Card>
                    {/each}
                {/if}
            {/if}

        </Column>

        <TextButton size='xs' on:click={() => createSetDialog.show()}>CREATE SET</TextButton>
    </Column>


</Page>

<Dialog bind:this={createSetDialog}
        on:ok={() => controller.createSet(workoutId, exercise.id, newSetReps, newSetWeight, newSetRest)}
        okText='CREATE'>

    <Column gap='2' class='w-full'>
        <h3 class='text-black text-center'>Set Info</h3>
        <SetInput label='REPS' bind:value={newSetReps} max='20' min='1' />
        <SetInput label='WEIGHT' bind:value={newSetWeight} max='200' min='0' />
        <SetInput label='REST' bind:value={newSetRest} max='240' min='0' step='30' />
    </Column>
</Dialog>


<Dialog bind:this={deleteExerciseDialog}
        on:ok={() => controller.deleteExercise(workoutId, exercise.id)}
        okBackgroundColor='danger'
        okText='DELETE'>

    <h1 class='text-black font-semibold tracking-wide'>DELETE '{exercise.title.toUpperCase()}'</h1>
    <p class='text-black'>Do you really want to delete this exercise ? You will not be able to recover it
        later.</p>

</Dialog>
