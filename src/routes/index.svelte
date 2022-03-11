<script lang='ts'>
    import { UserStore } from '../lib/user/user-store';
    import { onMount } from 'svelte';

    const userStore = new UserStore();

    onMount(function() {
        userStore.getCurrentUser();
    });

    let email = '';
    let password = '';
</script>

{#if $userStore.authenticated}
    <h1 class='text-3xl font-bold underline'>
        You are IN!
    </h1>
{:else}
    <h1 class='text-3xl font-bold underline'>
        Enter your credentials:
    </h1>
    <label for='email'>Your e-mail</label>
    <input type='text' id='email' bind:value={email}>
    <label for='password'>Your password</label>
    <input type='password' id='password' bind:value={password}>
    <button on:click={() => userStore.signIn(email, password)}>SUBMIT</button>

{/if}