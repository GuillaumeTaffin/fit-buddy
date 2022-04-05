<script lang='ts'>
    import { page } from '$app/stores';
    import { workoutsStore } from '../../../stores';
    import { key, WorkoutDetailsPageController } from '../workout-details-page/workout-details-page-controller';
    import { onMount, setContext } from 'svelte';
    import Page from '../../../../lib/components/page/Page.svelte';
    import Dialog from '../../../../lib/components/modal/Dialog.svelte';
    import Row from '../../../../lib/components/Row.svelte';
    import Column from '../../../components/Column.svelte';
    import Card from '../../../components/Card.svelte';
    import SetInfo from './SetInfo.svelte';
    import SetInput from './SetInput.svelte';
    import { Set } from '../../workout';
    import ActionButton from '../workout-details-page/ActionButton.svelte';

    const workoutId = parseInt($page.params.workoutId);
    const exerciseId = parseInt($page.params.exerciseId);

    const controller = new WorkoutDetailsPageController(workoutsStore);
    setContext(key, controller);

    onMount(() => {
        controller.getDetails(workoutId);
    });

    let deleteExerciseDialog;
    let createSetDialog;
    let editSetDialog;

    $: workout = $controller.workout;
    $: exercise = workout.exercises.find(e => e.id === exerciseId);
    $: title = exercise?.title ?? 'Loading...';

    let newSetReps = 10;
    let newSetWeight = 50;
    let newSetRest = 90;

    let editSetReps = 10;
    let editSetWeight = 50;
    let editSetRest = 90;
    let editSetId;

    const editSet = (set: Set) => {
        editSetReps = set.reps;
        editSetRest = set.rest;
        editSetWeight = set.weight;
        editSetId = set.id;
        editSetDialog.show();
    };

    let deleteSetDialog;
    let setToDelete: number;

    const showDeleteSetDialog = (setId: number) => {
        setToDelete = setId;
        deleteSetDialog.show();
    };

    const deleteExercise = () => {
        controller.deleteExercise(workoutId, exercise.id);
        window.history.back();
    };

</script>

<Page {title}>
    <Column class='px-3 px-2 grow' gap='4'>
        <Column class='grow' gap='2'>
            <h2 class='text-base font-medium tracking-wider text-center'>SETS</h2>
            {#if exercise}
                {#if exercise.sets?.length}
                    {#each exercise.sets.sort((n1, n2) => n1.id - n2.id) as set, i (set.id)}
                        <Card class='bg-white/75 py-4 px-2' on:click={() => editSet(set)}>
                            <Row>
                                <div class='grow grid grid-cols-3 divide-x divide-black/50'>
                                    <SetInfo data={set.reps} label='reps' />
                                    <SetInfo data={set.weight} label='lb' />
                                    <SetInfo data={set.rest} label='seconds' />
                                </div>
                                <Row gap='3' class='pr-2'>
                                    <span class='material-icons-outlined text-xl text-danger/50'
                                          on:click|stopPropagation={() => showDeleteSetDialog(set.id)}>remove_circle_outline</span>
                                </Row>
                            </Row>
                        </Card>
                    {/each}
                {/if}
            {/if}

        </Column>

    </Column>

    <svelte:fragment slot='actionBar'>
        <ActionButton label='EXERCISE' icon='delete' on:click={() => deleteExerciseDialog.show()} />
        <ActionButton label='SET' icon='add_circle_outline' on:click={() => createSetDialog.show()} />
    </svelte:fragment>

</Page>

<Dialog bind:this={createSetDialog}
        on:ok={() => controller.createSet(workoutId, exercise.id, newSetReps, newSetWeight, newSetRest)}
        okText='CREATE'>

    <Column gap='2' class='w-full'>
        <h3 class='text-black text-center font-semibold tracking-wide'>CREATE SET</h3>
        <SetInput label='REPS' bind:value={newSetReps} max='20' min='1' />
        <SetInput label='WEIGHT' bind:value={newSetWeight} max='200' min='0' />
        <SetInput label='REST' bind:value={newSetRest} max='240' min='0' step='30' />
    </Column>
</Dialog>


<Dialog bind:this={editSetDialog}
        on:ok={() => controller.updateSet(workoutId, editSetId, editSetReps, editSetWeight, editSetRest)}
        okText='UPDATE'>

    <Column gap='2' class='w-full'>
        <h3 class='text-black text-center font-semibold tracking-wide'>UPDATE SET</h3>
        <SetInput label='REPS' bind:value={editSetReps} max='20' min='1' />
        <SetInput label='WEIGHT' bind:value={editSetWeight} max='200' min='0' />
        <SetInput label='REST' bind:value={editSetRest} max='240' min='0' step='30' />
    </Column>
</Dialog>

<Dialog bind:this={deleteExerciseDialog}
        on:ok={() => deleteExercise()}
        okBackgroundColor='danger'
        okText='DELETE'>

    <h1 class='text-black font-semibold tracking-wide'>DELETE '{exercise.title.toUpperCase()}'</h1>
    <p class='text-black'>Do you really want to delete this exercise ? You will not be able to recover it
        later.</p>

</Dialog>

<Dialog bind:this={deleteSetDialog}
        on:ok={() => controller.deleteSet(workoutId, setToDelete)}
        okBackgroundColor='danger'
        okText='DELETE'>

    <h1 class='text-black font-semibold tracking-wide'>DELETE SET</h1>
    <p class='text-black'>Do you really want to delete this set ?</p>

</Dialog>
