<script lang='ts'>
    import Row from '../Row.svelte';
    import PageTitle from '../PageTitle.svelte';
    import Center from '../container/Center.svelte';
    import ChevronLeft from 'svelte-material-icons/ChevronLeft.svelte';
    import ChevronRight from 'svelte-material-icons/ChevronRight.svelte';
    import Backburger from 'svelte-material-icons/Backburger.svelte';
    import { mediaStore } from '../../stores';
    import { MediaState } from '../../media/media-store';

    export let title = '';

    $: roundedCorner = $mediaStore === MediaState.MOBILE ? 'rounded-tl-3xl' : 'rounded-bl-3xl';
</script>

<Row class='h-fit pt-4 w-full  {roundedCorner}' crossAxisAlignment='center'>
    <Row class='w-16' mainAxisAlignment='start'>
        <span on:click={() => window.history.back()}><ChevronLeft color='white' size='2em' /></span>
        <span on:click={() => window.history.forward()}><ChevronRight color='white' size='2em' /></span>
    </Row>
    <Center class='grow'>
        <PageTitle {title} />
    </Center>
    <Row class='w-16' mainAxisAlignment='end'>
        <Backburger color='white' size='2em' />
    </Row>
</Row>