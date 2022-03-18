<script>
    import Row from './Row.svelte';

    export let title = '';
    let clazz = '';
    // noinspection ReservedWordAsName
    export { clazz as class };
</script>

<Row class='w-fit' gap='2'>
    <h1 class='text-white/90 text-lg font-bold tracking-wider w-fit {clazz}'>{title.toUpperCase()}</h1>
</Row>