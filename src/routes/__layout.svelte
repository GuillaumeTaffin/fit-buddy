<script lang='ts'>
    import '../app.css';
    import { mediaStore, userStore } from '../lib/stores';
    import { onMount } from 'svelte';

    onMount(() => {
        userStore.getCurrentUser();
    });

    let windowWidth = 0;
    $: mediaStore.setWindowWidth(windowWidth);
</script>

<svelte:head>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto+Mono' />
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div class='flex h-screen w-screen  bg-gradient-to-br from-primary-dark to-primary-light'>
    <slot />
</div>