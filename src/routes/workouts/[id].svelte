<script>
    import Page from '../../lib/components/page/Page.svelte';
    import { page } from '$app/stores';
    import {
        WorkoutDetailsPageController
    } from '../../lib/workouts/pages/workout-details-page/workout-details-page-controller';
    import { workoutsStore } from '../../lib/stores';
    import { onMount } from 'svelte';
    import WorkoutDetails from '../../lib/workouts/pages/workout-details-page/WorkoutDetails.svelte';

    const workoutId = parseInt($page.params.id);

    const controller = new WorkoutDetailsPageController(workoutsStore);

    onMount(() => {
        controller.getDetails(workoutId);
    });

    $: title = $controller.workout?.title ?? 'Loading...';
</script>

<Page {title}>
    {#if $controller.workout}
        <WorkoutDetails workout={$controller.workout} />
    {/if}
</Page>