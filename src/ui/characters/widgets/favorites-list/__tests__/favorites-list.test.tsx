import { searchFavoritesControllerMock } from '@__mocks__/container.mock';
import { render, screen, waitFor } from '@testing-library/react';
import { FavoriteListMother } from '@ui/characters/models/__tests__/favorite-list-mother';
import { FavoritesList } from '@ui/characters/widgets/favorites-list';
import { renderWithFavoritesProvider } from '@__tests__/render-with-favorites-provider';

describe('FavoritesList widget', () => {
  it('Should be used inside a CharactersContextProvider', () => {
    expect(() => render(<FavoritesList />)).toThrow();
  });

  it('Should render the list', async () => {
    const favoritesList = FavoriteListMother();

    searchFavoritesControllerMock.mockResolvedValue(favoritesList);

    renderWithFavoritesProvider(<FavoritesList />);

    await waitFor(() => {
      expect(screen.getByTestId('results-paragraph')).toHaveTextContent(
        `${favoritesList.results} RESULTS`
      );
      favoritesList.characters.forEach((character) => {
        expect(screen.getByText(character.name)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute(
          'src',
          character.thumbnail
        );
      });
    });
  });
});
