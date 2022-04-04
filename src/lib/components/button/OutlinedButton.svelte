<script lang='ts'>
    export let size = 'md';
</script>

<button
    on:click
    class='
    py-1 px-2
    rounded-full bg-transparent active:bg-white/25
    text-primary font-semibold tracking-wider
    outline outline-primary
    text-{size}
'
>
    <slot></slot>
</button>