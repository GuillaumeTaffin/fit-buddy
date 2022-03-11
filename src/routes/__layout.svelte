<script>
    import '../app.css';
    import { onMount } from 'svelte';
    import { userStore } from '../lib/stores';
    import AuthPage from '../lib/auth/AuthPage.svelte';

    onMount(function() {
        userStore.getCurrentUser();
    });
</script>

{#if $userStore.authenticated}
    <slot />
{:else}
    <AuthPage />
{/if}