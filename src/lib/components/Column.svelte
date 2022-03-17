<!--suppress ReservedWordAsName -->
<script lang='ts'>
    export let mainAxisAlignment = 'start';
    export let crossAxisAlignment = 'start';
    export let gap = 0;

    let clazz = '';
    export { clazz as class };
</script>

<div class='flex flex-col justify-{mainAxisAlignment} items-{crossAxisAlignment} space-y-{gap} {clazz}'>
    <slot></slot>
</div>