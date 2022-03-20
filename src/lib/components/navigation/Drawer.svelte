<script lang='ts'>
    import Column from '../Column.svelte';
    import { cubicOut } from 'svelte/easing';
    import NavLink from './NavLink.svelte';
    import type { NavItem } from './nav-item';
    import { mediaStore } from '../../stores';
    import { MediaState } from '../../media/media-store';

    export let visible = false;
    export let toggleDrawer;

    const sections: NavItem[] = [
        { link: '/', icon: 'home.png', label: 'HOME' },
        { link: '/workouts', icon: 'healthy-lifestyle-border.png', label: 'TRAININGS' },
        { link: '/auth', icon: 'unlocked.png', label: 'SIGN IN' },
        { link: '/settings', icon: 'settings.png', label: 'SETTINGS' }
    ];

    function clickOutside(node) {
        const handleClick = (event) => {
            if (!node.contains(event.target)) {
                node.dispatchEvent(new CustomEvent('outclick'));
            }
        };

        document.addEventListener('click', handleClick, true);

        return {
            destroy() {
                document.removeEventListener('click', handleClick, true);
            }
        };
    }

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

{#if visible}
    <div transition:slide|local='{{duration: 300}}' use:clickOutside on:outclick={toggleDrawer}
         class='overflow-clip fixed top-0 right-0 w-64 h-full bg-gradient-to-bl from-primary-dark text-black'>
        <Column mainAxisAlignment={linkPosition} crossAxisAlignment='center' gap='8' class='px-4 py-16 h-full'>

            {#each sections as section (section.link)}
                <NavLink item={section} />
            {/each}

        </Column>
    </div>
{/if}