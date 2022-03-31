<script>
    import Modal from './Modal.svelte';
    import Card from '../Card.svelte';
    import Column from '../Column.svelte';
    import TextButton from '../button/TextButton.svelte';
    import Row from '../Row.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let showModal = false;
    const hide = () => showModal = false;
    const ok = () => {
        dispatch('ok');
        hide();
    };

    export let okText = 'OK';
    export let okBackgroundColor = 'primary';
    export let cancelText = 'CANCEL';
    export const show = () => showModal = true;

</script>

<Modal {showModal} on:outclick={hide} class='w-full max-w-md p-2'>
    <Card shadow='none' class='bg-white p-4'>
        <Column gap='4' crossAxisAlignment='center'>
            <slot />
            <Row gap='4'>
                <TextButton priority='HIGH' backgroundColor='{okBackgroundColor}' on:click={ok}>
                    {okText}
                </TextButton>
                <TextButton priority='LOW' on:click={hide}>
                    {cancelText}
                </TextButton>
            </Row>
        </Column>
    </Card>
</Modal>