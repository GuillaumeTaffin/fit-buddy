<script lang='ts'>
    import { userStore } from '$lib/stores';
    import TextField from '../components/TextField.svelte';
    import Logo from '../components/Logo.svelte';
    import Column from '../components/Column.svelte';
    import PageTitle from '../components/PageTitle.svelte';
    import Row from '../components/Row.svelte';
    import Page from '../components/page/Page.svelte';
    import ElevatedButton from '../components/button/ElevatedButton.svelte';
    import { goto } from '$app/navigation';

    let isSignIn = true;

    let email = '';
    let password = '';

    const submitActionText = (signIn: boolean) => signIn ? 'SIGN IN' : 'CREATE ACCOUNT';

    $: submitButtonText = submitActionText(isSignIn);
    $: submitAction = isSignIn ? () => userStore.signIn(email, password) : () => userStore.signUp(email, password);
    $: switchButtonText = submitActionText(!isSignIn);
    $: switchLabelText = isSignIn ? 'Not member already ?' : 'Already member ?';

    $: $userStore.authenticated ? goto('/') : '';
</script>

<Page class='p-4' title={submitButtonText}>

    <Column crossAxisAlignment='center' mainAxisAlignment='center' gap='4' class='h-full'>
        <Logo class='w-52' />
        <PageTitle title='FIT BUDDY' />
        <form on:submit|preventDefault={submitAction} class='w-full max-w-sm'>
            <Column crossAxisAlignment='center' gap='4'>
                <TextField hint='Your e-mail' bind:text={email} />
                <TextField type='password' hint='Your password' bind:text={password} />
                <ElevatedButton>
                    LET'S GO !
                </ElevatedButton>
            </Column>

        </form>
    </Column>

    <Row gap='4' mainAxisAlignment='center' crossAxisAlignment='center'>
        <p class='text-white/75 text-sm'>{switchLabelText}</p>
        <button on:click={() => isSignIn = !isSignIn}
                class='hover:italic text-white/75 rounded-lg text-sm'>
            {switchButtonText}
        </button>
    </Row>


</Page>
