<script>
    import Modal from './Modal.svelte';

    export let showModal = true;
</script>

<Modal {showModal} on:outclick class='w-full max-w-md p-2'>
    <slot />
</Modal>