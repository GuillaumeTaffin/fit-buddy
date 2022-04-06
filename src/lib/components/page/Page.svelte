<!--suppress ReservedWordAsName -->
<script lang='ts'>
    import AppBar from './AppBar.svelte';
    import Drawer from '../navigation/Drawer.svelte';
    import ActionsBar from '../../workouts/pages/workout-details-page/ActionsBar.svelte';

    let clazz = '';
    export { clazz as class };

    export let title = '';

    let showDrawer = false;

    const toggleDrawer = () => showDrawer = !showDrawer;

</script>


<div class='w-screen h-screen flex flex-col justify-items-stretch {clazz}'>
    <div class='grow flex flex-col md:flex-row-reverse'>
        <div class='grow flex flex-col'>
            <AppBar {title} onClickDrawerIcon={toggleDrawer} />

            <div class='flex flex-col w-full grow overflow-y-hidden'>
                <slot></slot>
            </div>
            <Drawer visible={showDrawer} on:outclick={toggleDrawer} />
        </div>


        {#if $$slots.actionBar}
            <ActionsBar>
                <slot name='actionBar' />
            </ActionsBar>
        {/if}
    </div>

</div>