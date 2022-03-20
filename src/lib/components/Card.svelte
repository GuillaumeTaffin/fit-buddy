<!--suppress ReservedWordAsName -->
<script lang='ts'>
    let clazz = '';
    export { clazz as class };

    export let shadow = 'lg';
</script>

<div class='rounded-xl shadow-{shadow} shadow-primary-dark {clazz}'>
    <slot />
</div>