<!--suppress ReservedWordAsName -->
<script lang='ts'>
    import { clickOutside } from './modal.ts';
    import Center from '../container/Center.svelte';

    export let showModal = true;

    let clazz = '';
    export { clazz as class };

</script>

{#if showModal}
    <Center class='fixed top-0 left-0 h-full w-full bg-black/50'>
        <div use:clickOutside on:outclick class='{clazz}'>
            <slot></slot>
        </div>
    </Center>
{/if}