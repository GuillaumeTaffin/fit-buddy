<script lang='ts'>
    export let text = '';
</script>

<button
    class='
    py-2 px-4
    rounded-full bg-white active:bg-white/50
    outline outline-white outline-offset-2
    text-primary font-medium tracking-wider
    ring ring-white/0'
>
    {text.toUpperCase()}
</button>