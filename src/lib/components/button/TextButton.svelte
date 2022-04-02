<!--suppress ReservedWordAsName -->
<script lang='ts'>
    export let priority = 'HIGH';
    export let backgroundColor = 'primary';
    export let size = 'md';
    export let padding = 2;

    $: background = priority === 'HIGH' ?
        `bg-${backgroundColor} active:bg-${backgroundColor}/50`
        : `bg-transparent active:bg-${backgroundColor}/50`;
    $: text = priority === 'HIGH' ? 'text-white' : `text-${backgroundColor}`;
</script>

<button on:click
        class='
        rounded-full {background} {text}
        py-{padding} px-{padding * 2}
        font-medium tracking-wider text-{size}
'>
    <slot></slot>
</button>