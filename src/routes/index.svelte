<script lang='ts'>
    import Card from '../lib/components/Card.svelte';
</script>

<div class='flex flex-col h-full w-full'>
    <h1 class='text-white text-3xl font-bold tracking-wide text-center p-8'>Welcome back !</h1>
    <div class='p-4 grow flex flex-col   items-center'>
        <br>
        <div class='grid grid-cols-1 gap-4 max-w-md w-full'>
            <div>
                <a href='/workouts w-full'>
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
</div>


