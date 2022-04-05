<script lang='ts'>
    import Column from '../../../components/Column.svelte';

    export let label = '';
    export let icon = '';
</script>

<div on:click>
    <Column crossAxisAlignment='center' gap='1'>
        <p class='material-icons-outlined text-primary text-center'>{icon}</p>
        <p class='text-xs text-primary w-fit'>{label}</p>
    </Column>
</div>