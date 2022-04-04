<script>

    export let label = '';
    export let min = 0;
    export let max = 100;
    export let step = 1;

    export let value;
</script>

<div class='grid grid-cols-9 items-center gap-4'>
    <p class='col-span-2 text-black/80 text-sm font-medium tracking-wider'>{label}</p>
    <input class='col-span-6 bg-primary ' type='range' {min} {max} {step} bind:value={value}>
    <p class='text-black text-sm text-center'>{value}</p>
</div>