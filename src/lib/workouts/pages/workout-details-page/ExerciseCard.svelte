<script lang='ts'>
    import Card from '../../../components/Card.svelte';
    import { Exercise } from '../../workout';
    import TextButton from '../../../components/button/TextButton.svelte';
    import Column from '../../../components/Column.svelte';
    import Row from '../../../components/Row.svelte';
    import Dialog from '../../../components/modal/Dialog.svelte';
    import { workoutDetailsController } from '../../../stores';

    export let exercise: Exercise;
    export let workoutId: number;

    let deleteExerciseDialog;
    let onDelete = () => {
        workoutDetailsController.deleteExercise(workoutId, exercise.id);
    };
</script>

<Card class='bg-white/75 px-4 py-2 max-w-md shadow-none'>
    <Column>
        <h2 class='text-black text-md font-medium'>{exercise.title.toUpperCase()}</h2>
        <div class='grid grid-cols-4 w-full py-4'>
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
        on:ok={onDelete}
        okBackgroundColor='danger'
        okText='DELETE'>

    <h1 class='text-black font-semibold tracking-wide'>DELETE '{exercise.title.toUpperCase()}'</h1>
    <p class='text-black'>Do you really want to delete this exercise ? You will not be able to recover it
        later.</p>

</Dialog>