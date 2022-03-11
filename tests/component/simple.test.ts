import Index from '../../src/routes/index.svelte';
import { render } from '@testing-library/svelte';

test('Welcome the user', () => {
    const { getByText } = render(Index);

    expect(getByText('Hello world!')).toBeInTheDocument();
});