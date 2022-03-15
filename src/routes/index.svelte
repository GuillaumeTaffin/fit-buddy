<script lang='ts'>
    import SectionCard from '$lib/home/SectionCard.svelte';
    import Column from '../lib/components/Column.svelte';
    import PageTitle from '../lib/components/PageTItle.svelte';

    const sections = [
        { link: '/workouts', icon: 'healthy-lifestyle-border.png', label: 'TRAININGS' },
        { link: '/settings', icon: 'settings.png', label: 'SETTINGS' }
    ];
</script>

<Column crossAxisAlignment='center' class='p-4'>
    <PageTitle title='Welcome back !' class='p-8' />

    <Column gap='4' crossAxisAlignment='center'>
        {#each sections as section (section.link)}
            <SectionCard {...section} />
        {/each}
    </Column>

</Column>


