<script>
    import '../app.css';
    import { onMount } from 'svelte';
    import { userStore } from '../lib/stores';
    import AuthPage from '../lib/auth/AuthPage.svelte';
    import AppBar from '../lib/components/AppBar.svelte';

    let loading = true;

    onMount(async () => {
        loading = true;
        await userStore.getCurrentUser();
        await new Promise(r => setTimeout(r, 500));
        loading = false;
    });

    $: authenticated = $userStore.authenticated;

</script>

<svelte:head>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto+Mono' />
</svelte:head>

{#if loading}
    <div class='flex flex-col justify-center h-screen items-center'>
        <img src='spinner-bg-light.gif' alt='spinner' class='w-32'>
    </div>
{:else}
    <div class='h-screen w-screen'>
        {#if authenticated}

            <AppBar />
            <slot />
        {:else}
            <AuthPage />
        {/if}
    </div>
{/if}