<script lang='ts'>
    import { userStore } from '$lib/stores';
    import TextField from '../components/TextField.svelte';

    let email = '';
    let password = '';
</script>

<div id='page' class='h-screen bg-[color:var(--primary-dark)] flex flex-col justify-center'>

    <div class=''>
        <img src='static/logo512.png' alt='Fit-Buddy logo' class='w-52 m-auto'>
        <h1 class='text-3xl font-bold text-center'>
            FIT-BUDDY
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
                <input type='submit' value='SUBMIT'
                       class='px-4 py-2 hover:bg-[color:var(--primary-light)] bg-[color:var(--primary)] rounded-md'>
            </div>
        </form>
    </div>

</div>
