<script lang='ts'>
    import '../app.css';
    import { onMount } from 'svelte';
    import { userStore } from '../lib/stores';
    import AuthPage from '../lib/auth/AuthPage.svelte';

    onMount(async () => {
        await userStore.getCurrentUser();
    });

    $: authenticated = $userStore.authenticated;

</script>

<svelte:head>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto+Mono' />
</svelte:head>


<div class='flex h-screen w-screen  bg-gradient-to-br from-primary-dark to-accent-light'>
    {#if authenticated}
        <slot />
    {:else}
        <AuthPage />
    {/if}
</div>