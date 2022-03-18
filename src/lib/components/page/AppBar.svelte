<script lang='ts'>
    import Row from '../Row.svelte';
    import GoBackButton from '../navigation/GoBackButton.svelte';
    import PageTitle from '../PageTitle.svelte';

    export let title = '';
</script>

<Row gap='4' class='h-fit px-4 py-6 w-full' crossAxisAlignment='center'>
    <GoBackButton />
    <PageTitle title={title} />
</Row>