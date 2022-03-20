<!--suppress ReservedWordAsName -->
<script lang='ts'>
    import { clickOutside } from './modal.ts';
    import Center from '../container/Center.svelte';

    let clazz = '';
    export { clazz as class };

    export let showModal = true;

    const hide = () => {
        showModal = false;
    };
</script>

{#if showModal}
    <Center class='fixed top-0 left-0 h-full w-full bg-black/40'>
        <div use:clickOutside on:outclick={hide} class='w-full max-w-md p-2'>
            <slot></slot>
        </div>
    </Center>
{/if}