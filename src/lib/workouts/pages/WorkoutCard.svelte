<script lang='ts'>
    import { Workout } from '../workout';
    import Card from '../../components/Card.svelte';
    import Column from '../../components/Column.svelte';

    export let workout: Workout;

</script>

<Card class='px-4 py-2 w-full max-w-md'>
    <Column crossAxisAlignment='start'>
        <p class='text-xl font-medium tracking-wide'>{workout.title}</p>
        <p class='text-sm font-medium text-white/75'>{workout.trainingAt.toLocaleString()}</p>
    </Column>
</Card>