<script>
    import Column from '../Column.svelte';
    import { cubicOut } from 'svelte/easing';
    import Row from '../Row.svelte';

    export let visible = false;
    export let toggleDrawer;

    const sections = [
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
</script>

{#if visible}
    <div transition:slide|local='{{duration: 300}}' use:clickOutside on:outclick={toggleDrawer}
         class='overflow-clip fixed top-0 right-0 w-64 h-full bg-gradient-to-bl from-primary-dark text-black'>
        <Column mainAxisAlignment='end' class='pt-16'>
            <Column crossAxisAlignment='center' gap='8' class='p-4'>

                {#each sections as section (section.link)}
                    <a href={section.link} class='max-w-xs w-full'>
                        <Row crossAxisAlignment='center' gap='4' class=''>
                            <img src={section.icon} alt='logo' class='w-12'>
                            <p class='text-lg font-semibold tracking-widest text-white'>{section.label}</p>
                        </Row>
                    </a>
                {/each}

            </Column>
        </Column>
    </div>
{/if}