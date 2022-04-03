<script>
    import Page from '../../../lib/components/page/Page.svelte';
    import { page } from '$app/stores';
    import { onMount, setContext } from 'svelte';
    import WorkoutDetails from '../../../lib/workouts/pages/workout-details-page/WorkoutDetails.svelte';
    import {
        key,
        WorkoutDetailsPageController
    } from '../../../lib/workouts/pages/workout-details-page/workout-details-page-controller';
    import { workoutsStore } from '../../../lib/stores';
    import WorkoutActions from '../../../lib/workouts/pages/workout-details-page/WorkoutActions.svelte';

    const workoutId = parseInt($page.params.workoutId);

    const controller = new WorkoutDetailsPageController(workoutsStore);
    setContext(key, controller);

    onMount(() => {
        controller.getDetails(workoutId);
    });

    $: title = $controller.workout?.title ?? 'Loading...';


</script>

<Page {title}>
    <div class='grow overflow-y-auto'>
        {#if $controller.workout}
            <WorkoutDetails workout={$controller.workout} />
        {/if}
    </div>

    <WorkoutActions {workoutId} />

</Page>