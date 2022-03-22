<script lang='ts'>
    import Column from '../Column.svelte';
    import { cubicOut } from 'svelte/easing';
    import NavLink from './NavLink.svelte';
    import { mediaStore, routesStore } from '../../stores';
    import { MediaState } from '../../media/media-store';
    import Modal from '../modal/Modal.svelte';

    export let visible = false;

    function slide(node, { duration }) {
        return {
            duration,
            css: t => {
                const eased = cubicOut(t);

                return `
					transform: translate(${100 - 100 * eased}%, 0px);`;
            }
        };
    }

    $: linkPosition = $mediaStore === MediaState.MOBILE ? 'end' : 'start';
</script>

<Modal on:outclick showModal={visible}>
    <div transition:slide|local='{{duration: 300}}'
         class='overflow-clip fixed top-0 right-0 w-64 h-full bg-gradient-to-bl from-primary-dark text-black'>
        <Column mainAxisAlignment={linkPosition} crossAxisAlignment='center' gap='8' class='px-4 py-16 h-full'>

            {#each $routesStore as section (section.link)}
                <NavLink item={section} />
            {/each}

        </Column>
    </div>

</Modal>