<script lang='ts'>
    import Card from '../../../components/Card.svelte';
    import { Exercise } from '../../workout';
    import TextButton from '../../../components/button/TextButton.svelte';
    import Column from '../../../components/Column.svelte';
    import Row from '../../../components/Row.svelte';
    import Dialog from '../../../components/modal/Dialog.svelte';
    import { key, WorkoutDetailsPageController } from './workout-details-page-controller';
    import { getContext } from 'svelte';

    export let exercise: Exercise;
    export let workoutId: number;

    let controller: WorkoutDetailsPageController = getContext(key);

    let deleteExerciseDialog;
</script>

<Card class='bg-white/75 px-4 py-2 max-w-md shadow-none'>
    <Column>
        <h2 class='text-black text-md font-medium'>{exercise.title.toUpperCase()}</h2>
        <div class='grid grid-cols-4 w-full py-4'>
            {#if exercise.sets?.length}
                <p class='text-black/75'>#</p>
                <p class='text-black/75'>Reps</p>
                <p class='text-black/75'>Weight</p>
                <p class='text-black/75'>Rest</p>
                {#each exercise.sets as set (set.id)}
                    <p class='text-black'>{set.index}</p>
                    <p class='text-black'>{set.reps}</p>
                    <p class='text-black'>{set.weight}</p>
                    <p class='text-black'>{set.rest}</p>
                {/each}
            {/if}
        </div>
        <Row mainAxisAlignment='end'>
            <TextButton priority='LOW' backgroundColor='danger' size='xs' on:click={() => deleteExerciseDialog.show()}>
                DELETE
            </TextButton>
            <TextButton priority='LOW' size='xs'>ADD SET</TextButton>
        </Row>
    </Column>

</Card>

<Dialog bind:this={deleteExerciseDialog}
        on:ok={() => controller.deleteExercise(workoutId, exercise.id)}
        okBackgroundColor='danger'
        okText='DELETE'>

    <h1 class='text-black font-semibold tracking-wide'>DELETE '{exercise.title.toUpperCase()}'</h1>
    <p class='text-black'>Do you really want to delete this exercise ? You will not be able to recover it
        later.</p>

</Dialog>