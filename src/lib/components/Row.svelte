<!--suppress ReservedWordAsName -->
<script lang='ts'>
    export let mainAxisAlignment = 'start';
    export let crossAxisAlignment = 'start';
    export let gap = 0;

    let clazz = '';
    export { clazz as class };

    $: justify = `justify-${mainAxisAlignment}`;
</script>

<div class='flex justify-{mainAxisAlignment} items-{crossAxisAlignment} space-x-{gap} {clazz}'>
    <slot></slot>
</div>