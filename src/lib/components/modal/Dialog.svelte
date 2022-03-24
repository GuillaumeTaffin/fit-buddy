<script>
    import Modal from './Modal.svelte';
    import Card from '../Card.svelte';
    import Column from '../Column.svelte';
    import TextButton from '../button/TextButton.svelte';
    import Row from '../Row.svelte';

    export let showModal = true;
    export let onOk = () => console.log('OK clicked');
    export let okText = 'OK';
    export let okBackgroundColor = 'primary';
    export let onCancel = () => console.log('CANCEL clicked');
    export let cancelText = 'CANCEL';
</script>

<Modal {showModal} on:outclick={onCancel} class='w-full max-w-md p-2'>
    <Card shadow='none' class='bg-white p-4'>
        <Column gap='4' crossAxisAlignment='center'>
            <slot />
            <Row gap='4'>
                <TextButton priority='HIGH' backgroundColor='{okBackgroundColor}' on:click={onOk}>
                    {okText}
                </TextButton>
                <TextButton priority='LOW' on:click={onCancel}>
                    {cancelText}
                </TextButton>
            </Row>
        </Column>
    </Card>
</Modal>