<script lang='ts'>
    import { workoutsStore } from '$lib/stores';
    import { onMount } from 'svelte';
    import Page from '../lib/components/page/Page.svelte';
    import Column from '../lib/components/Column.svelte';
    import WorkoutCard from '../lib/workouts/pages/WorkoutCard.svelte';
    import Center from '../lib/components/container/Center.svelte';
    import ElevatedButton from '../lib/components/button/ElevatedButton.svelte';

    onMount(() => {
        workoutsStore.getAllWorkouts();
    });

    $: workouts = $workoutsStore;

</script>

<Page title='trainings'>
    <Column crossAxisAlignment='center' class='grow w-full py-4'>
        {#each workouts as workout (workout.id)}
            <WorkoutCard {workout} />
        {/each}
    </Column>

    <Center class='p-2'>
        <ElevatedButton>
            NEW TRAINING
        </ElevatedButton>
    </Center>


</Page>