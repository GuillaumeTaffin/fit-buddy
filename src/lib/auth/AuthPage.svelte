<script lang='ts'>
    import { userStore } from '$lib/stores';

    let email = '';
    let password = '';
</script>

<h1 class='text-3xl font-bold underline'>
    Enter your credentials:
</h1>
<label for='email'>Your e-mail</label>
<input type='text' id='email' bind:value={email}>
<label for='password'>Your password</label>
<input type='password' id='password' bind:value={password}>
<button on:click={() => userStore.signIn(email, password)}>SUBMIT</button>