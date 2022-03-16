<!--suppress ReservedWordAsName -->
<script lang='ts'>
    export let mainAxisAlignment = 'start';
    export let crossAxisAlignment = 'start';
    export let gap = 0;
    export let width = 'full';
    export let height = 'fit';

    let clazz = '';
    export { clazz as class };
</script>

<div
    class='flex justify-{mainAxisAlignment} items-{crossAxisAlignment} space-x-{gap} w-{width} h-{height} {clazz}'>
    <slot></slot>
</div>