<script lang='ts'>
    import Row from '../Row.svelte';
    import type { NavItem } from './nav-item.ts';

    export let item: NavItem;
</script>

<a href={item.link} class='max-w-xs w-full'>
    <Row crossAxisAlignment='center' gap='4' class=''>
        <img src={item.icon} alt='logo' class='w-12'>
        <p class='text-lg font-semibold tracking-widest text-white'>{item.label.toUpperCase()}</p>
    </Row>
</a>