<!--suppress ReservedWordAsName -->
<script>
    import AppBar from './AppBar.svelte';
    import { mediaStore } from '../../stores';
    import { MediaState } from '../../media/media-store';

    let clazz = '';
    export { clazz as class };

    export let title = '';

    $: colDirection = $mediaStore === MediaState.MOBILE ? 'flex-col-reverse' : 'flex-col';
</script>


<div class='w-screen h-screen p-4 flex {colDirection} justify-items-stretch {clazz}'>
    <AppBar {title} />
    <div class='flex flex-col w-full grow'>
        <slot></slot>
    </div>
</div>