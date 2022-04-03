<script lang='ts'>
    import Row from '../Row.svelte';
    import PageTitle from '../PageTitle.svelte';
    import ChevronLeft from 'svelte-material-icons/ChevronLeft.svelte';
    import { mediaStore } from '../../stores';
    import { MediaState } from '../../media/media-store';
    import DrawerIcon from '../navigation/DrawerIcon.svelte';

    export let title = '';
    export let onClickDrawerIcon;

    $: roundedCorner = $mediaStore === MediaState.MOBILE ? 'rounded-tl-3xl' : 'rounded-bl-3xl';
</script>

<Row class='h-fit py-4 px-2 w-full  {roundedCorner}' crossAxisAlignment='center'>
    <Row class='w-16' mainAxisAlignment='start'>
        <span on:click={() => window.history.back()}><ChevronLeft color='white' size='2em' /></span>
    </Row>
    <Row mainAxisAlignment='between' crossAxisAlignment='center' class='w-full'>
        <PageTitle {title} />
        <DrawerIcon on:click={onClickDrawerIcon} />
    </Row>
</Row>