<script lang='ts'>
    export let text = '';
</script>

<button
    class='
    py-2 px-4
    rounded-full bg-white/75 active:bg-white/50
    text-primary font-semibold tracking-wider
    ring-2 ring-primary
'
>
    {text.toUpperCase()}
</button>