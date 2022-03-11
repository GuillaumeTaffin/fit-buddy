<script>
    import '../app.css';
    import { onMount } from 'svelte';
    import { userStore } from '../lib/stores';
    import AuthPage from '../lib/auth/AuthPage.svelte';

    onMount(function() {
        userStore.getCurrentUser();
    });
</script>

<svelte:head>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto+Mono' />
</svelte:head>

{#if $userStore.authenticated}
    <slot />
{:else}
    <AuthPage />
{/if}