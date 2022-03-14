<script lang='ts'>
    import Card from '../lib/components/Card.svelte';
</script>


<div class='p-4'>
    <h1 class='text-white text-2xl font-bold tracking-wide'>Welcome back !</h1>
    <br>
    <div class='grid grid-cols-2 gap-3'>
        <div>
            <a href='/workouts'>
                <Card
                    class='flex flex-col items-center space-y-4 p-4 text-center bg-accent-light/25  ring-2 ring-accent-light shadow-lg shadow-primary-dark active:shadow-none'>
                    <img src='healthy-lifestyle-border.png' alt='workout-logo' class='w-12'>
                    <p class='text-lg font-medium tracking-wide text-white'>TRAININGS</p>
                </Card>
            </a>
        </div>

        <div>
            <a href=''>
                <Card
                    class='flex flex-col items-center space-y-4 p-4 text-center bg-accent-light/25 ring-2 ring-accent-light shadow-lg shadow-primary-dark active:shadow-none'>
                    <img src='settings.png' alt='workout-logo' class='w-12'>
                    <p class='text-lg font-medium tracking-wide text-white'>SETTINGS</p>
                </Card>
            </a>
        </div>

    </div>
</div>

