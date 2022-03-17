<script lang='ts'>
    import { workoutsStore } from '$lib/stores';
    import { onMount } from 'svelte';
    import Page from '../lib/components/Page.svelte';
    import PageTitle from '../lib/components/PageTItle.svelte';
    import Column from '../lib/components/Column.svelte';
    import Card from '../lib/components/Card.svelte';
    import Row from '../lib/components/Row.svelte';

    onMount(() => {
        workoutsStore.getAllWorkouts();
    });

    $: workouts = $workoutsStore;
</script>

<Page>

    <Column crossAxisAlignment='center' class='grow w-full p-4'>
        <Row gap='8' class='h-fit pb-8 p-4 w-full' crossAxisAlignment='center'>
            <img src='back.png' alt='arrow'
                 class='w-5 h-5 fill-white bg-white rounded-full p-1 ring ringprimary outline outline-white outline-offset-2 active:bg-white/50'>

            <PageTitle title='WORKOUTS' />
        </Row>
        {#each workouts as workout (workout.id)}
            <Card class='px-4 py-2 w-full max-w-md'>
                <Column crossAxisAlignment='start'>
                    <p class='text-xl font-medium tracking-wide'>{workout.title}</p>
                    <p class='text-sm font-medium text-white/75'>{workout.trainingAt.toLocaleString()}</p>
                </Column>

            </Card>
        {/each}
    </Column>

    <Row mainAxisAlignment='center' crossAxisAlignment='center' class='p-4'>
        <button
            class='rounded-full outline outline-white outline-offset-2 text-primary font-medium tracking-wider ring ring-accent-light bg-white active:bg-white/50 py-2 px-4'>
            NEW WORKOUT
        </button>
    </Row>


</Page>