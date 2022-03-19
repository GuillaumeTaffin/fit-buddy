<script>
    import Row from '../Row.svelte';
    import Backburger from 'svelte-material-icons/Backburger.svelte';

    let clazz = '';
    export { clazz as class };
</script>

<Row class='w-16 w-fit {clazz}' mainAxisAlignment='end'>
    <span on:click><Backburger color='white' size='2em' /></span>
</Row>