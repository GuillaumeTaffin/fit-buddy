<script lang='ts'>
    import { userStore } from '$lib/stores';
    import TextField from '../components/TextField.svelte';
    import Logo from '../components/Logo.svelte';

    let email = '';
    let password = '';
</script>

<div id='page' class='h-screen flex flex-col justify-center p-4'>

    <div>
        <Logo class='w-52 m-auto' />
        <br>
        <h1 class='text-3xl font-bold text-center tracking-widest text-white'>
            FIT BUDDY
        </h1>
        <br>
        <form on:submit|preventDefault={() => userStore.signIn(email, password)}>
            <div class='max-w-sm m-auto'>
                <TextField hint='Your e-mail' bind:text={email} />
            </div>
            <br>
            <div class='max-w-sm m-auto'>
                <TextField type='password' hint='Your password' bind:text={password} />
            </div>
            <br>
            <div class='text-center'>
                <input type='submit' value='SIGN IN'
                       class='px-4 py-2 hover:bg-primary shadow-lg shadow-primary-dark active:shadow-none bg-gradient-to-br from-primary-dark rounded-md text-white text-lg tracking-wide font-medium'>
            </div>
        </form>
    </div>

</div>
