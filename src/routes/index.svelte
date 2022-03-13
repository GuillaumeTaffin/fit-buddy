<script lang='ts'>

    import Card from '../lib/components/Card.svelte';
</script>

<div class='p-2 flex flex-col'>
    <a href='/workouts w-full'>
        <Card
            class='w-full text-center p-4 hover:shadow-lg hover:shadow-[color:var(--primary-light)] border border-[color:var(--primary-light)]'>
            <img src='triangle.png' alt='workout-logo' class='w-20 m-auto'>
            <p class=' text-lg font-bold pt-2 tracking-wide text-[color:var(--primary)]'>TRAININGS</p>
        </Card>
    </a>
</div>