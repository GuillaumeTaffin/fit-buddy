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
        <PageTitle title='WORKOUTS' class='pb-12' />
        {#each workouts as workout (workout.id)}
            <Card class='px-4 py-2 w-full max-w-md'>
                <Column crossAxisAlignment='start'>
                    <p class='text-xl font-medium tracking-wide'>{workout.title}</p>
                    <p class='text-sm font-medium text-white/75'>{workout.trainingAt.toLocaleString()}</p>
                </Column>

            </Card>
        {/each}
    </Column>

    <Row mainAxisAlignment='center' class='bg-white/90 ring-2 ring-primary-dark/50 p-2'>
        <button
            class='rounded-xl bg-primary active:bg-primary-dark py-2 px-4'>
            NEW WORKOUT
        </button>
    </Row>


</Page>