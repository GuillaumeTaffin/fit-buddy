<!--suppress ReservedWordAsName -->
<script lang='ts'>
    import AppBar from './AppBar.svelte';
    import Drawer from '../navigation/Drawer.svelte';

    let clazz = '';
    export { clazz as class };

    export let title = '';

    let showDrawer = false;

    const toggleDrawer = () => showDrawer = !showDrawer;

</script>


<div class='w-screen h-screen flex flex-col justify-items-stretch {clazz}'>
    <AppBar {title} onClickDrawerIcon={toggleDrawer} />
    <div class='flex flex-col w-full grow overflow-y-hidden'>
        <slot></slot>
    </div>
    <Drawer visible={showDrawer} on:outclick={toggleDrawer} />
</div>