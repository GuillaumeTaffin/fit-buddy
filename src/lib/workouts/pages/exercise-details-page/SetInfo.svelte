<script lang='ts'>
    import Row from '../../../components/Row.svelte';

    export let data = '';
    export let label = '';
</script>

<Row crossAxisAlignment='center' mainAxisAlignment='center' gap='2'>
    <p class='text-black text-sm'>{data}</p>
    <p class='text-xs text-black'>{label}</p>
</Row>