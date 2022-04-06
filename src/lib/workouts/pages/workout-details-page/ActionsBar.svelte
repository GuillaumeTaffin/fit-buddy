<script lang='ts'>
    import { mediaStore } from '../../../stores';
    import { MediaState } from '../../../media/media-store';
    import Logo from '../../../components/Logo.svelte';
    import Center from '../../../components/container/Center.svelte';

    $: desktop = $mediaStore === MediaState.DESKTOP;
</script>

<div class='bg-white/30 rounded-t-3xl md:rounded-none md:rounded-none'>
    {#if desktop}
        <Center>
            <Logo class='w-32 p-6' />
        </Center>
    {/if}
    <div class='p-2 md:px-4 grid grid-flow-col divide-x md:grid-flow-row md:divide-x-0 divide-primary/50'>
        <slot></slot>
    </div>
</div>

