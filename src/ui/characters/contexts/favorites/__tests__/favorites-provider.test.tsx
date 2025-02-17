import { searchFavoritesControllerMock } from '@__mocks__/container.mock';
import { PromiseMother } from '@__mocks__/promise-mother';
import { screen, waitFor } from '@testing-library/react';
import { CharacterList } from '@ui/characters/models';
import { CharacterListMother } from '@ui/characters/models/__tests__/character-list-mother';
import { renderWithRouter } from '@__tests__/render-with-router';
import { FavoritesProvider } from '@ui/characters/contexts/favorites/favorites-provider';

describe('FavoritesProvider component', () => {
  it('Should display the loading status', async () => {
    const Header = vi.fn().mockReturnValue(null);
    const { promise, resolve } = PromiseMother<CharacterList>();

    searchFavoritesControllerMock.mockReturnValue(promise);

    renderWithRouter(
      <FavoritesProvider Header={Header}>children</FavoritesProvider>
    );

    expect(Header).toHaveBeenCalledWith({ isLoading: true }, undefined);

    resolve(CharacterListMother());

    return await promise;
  });

  it('Should display an error message', async () => {
    const error = new Error('Test error');

    const { promise, reject } = PromiseMother<CharacterList>();

    searchFavoritesControllerMock.mockReturnValue(promise);

    renderWithRouter(<FavoritesProvider>children</FavoritesProvider>, {
      queryConfig: { defaultOptions: { queries: { retry: false } } },
    });

    reject(error);

    await waitFor(() => {
      const errorText = screen.getByRole('paragraph');
      expect(errorText).toHaveTextContent('Error: Test error');
    });
  });

  it('Should display an unknown error message', async () => {
    const error = new Error();

    const { promise, reject } = PromiseMother<CharacterList>();

    searchFavoritesControllerMock.mockReturnValue(promise);

    renderWithRouter(<FavoritesProvider>children</FavoritesProvider>, {
      queryConfig: { defaultOptions: { queries: { retry: false } } },
    });

    reject(error);

    await waitFor(() => {
      const errorText = screen.getByRole('paragraph');
      expect(errorText).toHaveTextContent('Error: Unknown error');
    });
  });

  it('Should render the children', async () => {
    const characterList = CharacterListMother();
    const { promise, resolve } = PromiseMother<CharacterList>();

    searchFavoritesControllerMock.mockReturnValue(promise);

    renderWithRouter(
      <FavoritesProvider>
        <p>children</p>
      </FavoritesProvider>
    );

    resolve(characterList);

    await waitFor(() => {
      expect(screen.getByText('children')).toBeInTheDocument();
    });
  });
});
