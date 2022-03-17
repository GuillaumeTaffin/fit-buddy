<script lang='ts'>
    import SectionCard from '$lib/home/SectionCard.svelte';
    import Column from '../lib/components/Column.svelte';
    import PageTitle from '../lib/components/PageTItle.svelte';
    import Page from '../lib/components/Page.svelte';

    const sections = [
        { link: '/workouts', icon: 'healthy-lifestyle-border.png', label: 'TRAININGS' },
        { link: '/settings', icon: 'settings.png', label: 'SETTINGS' }
    ];
</script>

<Page class='p-4'>
    <Column crossAxisAlignment='center' gap='4'>
        <PageTitle title='Welcome back !' class='p-8' />

        {#each sections as section (section.link)}
            <SectionCard {...section} />
        {/each}

    </Column>
</Page>


