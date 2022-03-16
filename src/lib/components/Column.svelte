<!--suppress ReservedWordAsName -->
<script lang='ts'>
    export let mainAxisAlignment = 'start';
    export let crossAxisAlignment = 'start';
    export let gap = 0;
    let clazz = '';
    export { clazz as class };
    export let width = 'fit';
</script>

<div class='grow flex flex-col justify-{mainAxisAlignment} items-{crossAxisAlignment} space-y-{gap} w-{width} {clazz}'>
    <slot></slot>
</div>