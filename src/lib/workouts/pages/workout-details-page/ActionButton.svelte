<script lang='ts'>

    export let label = '';
    export let icon = '';
</script>

<div on:click class='px-2 md:py-2 md:px-4'>
    <div class='flex flex-col space-y-1 items-center md:flex-row md:space-x-2 md:space-y-0'>
        <p class='material-icons-outlined text-primary text-center'>{icon}</p>
        <p class='text-xs md:text-base md:tracking-wide md:font-medium text-primary'>{label}</p>
    </div>
</div>