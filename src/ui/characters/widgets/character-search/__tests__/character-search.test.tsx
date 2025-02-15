import { navigateMock } from '@__mocks__/react-router.mock';
import { renderWithRouter } from '@__tests__/render-with-router';
import { userEvent } from '@storybook/test';
import { act, screen } from '@testing-library/react';
import { CharacterSearch } from '@ui/characters/widgets/character-search/character-search';
import { DEFAULT_DEBOUNCE_TIME } from '@ui/shared/constants';

describe('CharacterSearch widget', () => {
  it('Should immediatly reflect changes in search', async () => {
    const user = userEvent.setup();
    const search = 'test search';
    renderWithRouter(<CharacterSearch />);

    const input = screen.getByRole('searchbox');

    await act(() => user.type(input, search));
    expect(input).toHaveValue(search);
  });

  it('Should navigate after DEFAULT_DEBOUNCE_TIME', async () => {
    vi.useFakeTimers();

    const user = userEvent.setup({
      advanceTimers: () => vi.advanceTimersToNextTimer(),
    });

    const search = 'test search';

    renderWithRouter(<CharacterSearch />);

    expect(navigateMock).toHaveBeenCalledTimes(1);

    const input = screen.getByRole('searchbox');

    await act(async () => {
      await user.type(input, search);
      vi.advanceTimersByTime(DEFAULT_DEBOUNCE_TIME);
    });

    expect(navigateMock).toHaveBeenCalledTimes(2);

    vi.useRealTimers();
  });
});
