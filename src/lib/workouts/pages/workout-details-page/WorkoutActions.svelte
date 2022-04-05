<script lang='ts'>
    import TextButton from '../../../components/button/TextButton.svelte';
    import Row from '../../../components/Row.svelte';
    import { key, WorkoutDetailsPageController } from './workout-details-page-controller';
    import { getContext } from 'svelte';
    import TextField from '../../../components/TextField.svelte';
    import Dialog from '../../../components/modal/Dialog.svelte';

    export let workoutId: number;

    let controller: WorkoutDetailsPageController = getContext(key);

    let newExerciseDialog;

    let newExerciseTitle = '';
</script>

<Row class='p-2' mainAxisAlignment='center' gap='2'>
    <TextButton on:click={() => newExerciseDialog.show()}>
        ADD EXERCISE
    </TextButton>
</Row>

<Dialog bind:this={newExerciseDialog}
        on:ok={() => controller.createExercise(workoutId, newExerciseTitle)}
        okText='CREATE'>

    <h1 class='text-black font-semibold tracking-wide'>CREATE EXERCISE</h1>
    <TextField hint='Title' outlined={true} bind:text={newExerciseTitle} />

</Dialog>
