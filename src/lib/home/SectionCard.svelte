<!--suppress ALL -->
<script lang='ts'>
    import Card from '$lib/components/Card.svelte';

    export let link = '';
    export let icon = '';
    export let label = '';

</script>

<a href={link} class='max-w-xs w-full'>
    <Card
        class='flex flex-col items-center space-y-4 p-4 text-center active:shadow-none bg-gradient-to-br from-primary to-primary/50'>
        <img src={icon} alt='logo' class='w-12'>
        <p class='text-lg font-semibold tracking-widest text-white'>{label}</p>
    </Card>
</a>