<!--suppress ReservedWordAsName -->
<script>
    import AppBar from './AppBar.svelte';
    import { mediaStore } from '../../stores';
    import { MediaState } from '../../media/media-store';
    import Drawer from '../navigation/Drawer.svelte';

    let clazz = '';
    export { clazz as class };

    export let title = '';

    let showDrawer = false;

    const toggleDrawer = () => showDrawer = !showDrawer;

    $: colDirection = $mediaStore === MediaState.MOBILE ? 'flex-col-reverse' : 'flex-col';
</script>


<div class='w-screen h-screen max-h-screen p-4 flex {colDirection} justify-items-stretch {clazz}'>
    <AppBar {title} onClickDrawerIcon={toggleDrawer} />
    <div class='flex flex-col w-full grow overflow-y-clip'>
        <slot></slot>
    </div>
    <Drawer visible={showDrawer} {toggleDrawer} />
</div>