import { useToggleIsFavoriteMock } from '@ui/characters/hooks/__mocks__/use-toggle-is-favorite-mock';
import { CharacterSummaryMother } from '@ui/characters/models/__tests__/character-summary-mother';
import { userEvent } from '@testing-library/user-event';
import { CharacterIsFavorite } from '@ui/characters/widgets/character-is-favorite';
import { renderWithQueryProvider } from '@__tests__/render-with-query-provider';
import { screen } from '@testing-library/dom';

describe('CharacterIsFavorite component', () => {
  const toggleMock = vi.fn();

  beforeEach(() => {
    useToggleIsFavoriteMock.mockReturnValue(toggleMock);
  });

  it('Should toggle the favorite', async () => {
    const character = CharacterSummaryMother();
    const user = userEvent.setup();

    renderWithQueryProvider(<CharacterIsFavorite character={character} />);

    const button = screen.getByRole('button');

    await user.click(button);

    expect(toggleMock).toHaveBeenCalledWith(character);
  });
});
