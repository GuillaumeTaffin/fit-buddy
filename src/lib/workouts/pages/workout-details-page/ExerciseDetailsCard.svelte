<script lang='ts'>
    import Card from '../../../components/Card.svelte';
    import { Exercise } from '../../workout';
    import TextButton from '../../../components/button/TextButton.svelte';
    import Column from '../../../components/Column.svelte';
    import Row from '../../../components/Row.svelte';
    import Dialog from '../../../components/modal/Dialog.svelte';
    import { key, WorkoutDetailsPageController } from './workout-details-page-controller';
    import { getContext } from 'svelte';
    import Close from 'svelte-material-icons/CloseThick.svelte';
    import Center from '../../../components/container/Center.svelte';

    export let exercise: Exercise;
    export let workoutId: number;

    let controller: WorkoutDetailsPageController = getContext(key);

    let deleteSetDialog;
    let setToDelete: number;

    const showDeleteSetDialog = (setId: number) => {
        setToDelete = setId;
        deleteSetDialog.show();
    };
</script>

<Card class='bg-white/75 px-4 py-2 max-w-md shadow-none'>
    <Column>
        <div class='grid grid-cols-5 w-full py-2 items-center gap-2'>
            {#if exercise.sets?.length}
                <p class='text-black/75 text-xs font-medium'>#</p>
                <p class='text-black/75 text-xs font-medium'>REPS</p>
                <p class='text-black/75 text-xs font-medium'>WEIGHT</p>
                <p class='text-black/75 text-xs font-medium'>REST</p>
                <p></p>
                {#each exercise.sets as set, i (set.id)}
                    <p class='text-black/75 text-sm'>{i + 1}</p>
                    <p class='text-black text-sm'>{set.reps}</p>
                    <p class='text-black text-sm'>{set.weight}</p>
                    <p class='text-black text-sm'>{set.rest}</p>
                    <Center>
                        <div on:click={() => showDeleteSetDialog(set.id)}>
                            <Close color='danger' />
                        </div>
                    </Center>
                {/each}
            {/if}
        </div>
        <Row mainAxisAlignment='end'>
            <TextButton priority='LOW' size='xs'
                        on:click={() => controller.createSet(workoutId, exercise.id, exercise.sets.length)}>ADD SET
            </TextButton>
        </Row>
    </Column>

</Card>

<Dialog bind:this={deleteSetDialog}
        on:ok={() => controller.deleteSet(workoutId, setToDelete)}
        okBackgroundColor='danger'
        okText='DELETE'>

    <h1 class='text-black font-semibold tracking-wide'>DELETE SET</h1>
    <p class='text-black'>Do you really want to delete this set ?</p>

</Dialog>