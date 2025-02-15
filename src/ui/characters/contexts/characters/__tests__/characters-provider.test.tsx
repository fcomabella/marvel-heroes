import { searchCharactersControllerMock } from '@__mocks__/container.mock';
import { PromiseMother } from '@__mocks__/promise-mother';
import { screen, waitFor } from '@testing-library/react';
import { CharactersProvider } from '@ui/characters/contexts/characters/characters-provider';
import { CharacterList } from '@ui/characters/models';
import { CharacterListMother } from '@ui/characters/models/__tests__/character-list-mother';
import { renderWithRouter } from '@__tests__/render-with-router';

describe('CharactersProvider component', () => {
  it('Should display the loading status', async () => {
    const Header = vi.fn().mockReturnValue(null);
    const { promise, resolve } = PromiseMother<CharacterList>();

    searchCharactersControllerMock.mockReturnValue(promise);

    renderWithRouter(
      <CharactersProvider Header={Header}>children</CharactersProvider>
    );

    expect(Header).toHaveBeenCalledWith({ isLoading: true }, undefined);

    resolve(CharacterListMother());

    return await promise;
  });

  it('Should display an error message', async () => {
    const error = new Error('Test error');

    const { promise, reject } = PromiseMother<CharacterList>();

    searchCharactersControllerMock.mockReturnValue(promise);

    renderWithRouter(<CharactersProvider>children</CharactersProvider>, {
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

    searchCharactersControllerMock.mockReturnValue(promise);

    renderWithRouter(<CharactersProvider>children</CharactersProvider>, {
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

    searchCharactersControllerMock.mockReturnValue(promise);

    renderWithRouter(
      <CharactersProvider>
        <p>children</p>
      </CharactersProvider>
    );

    resolve(characterList);

    await waitFor(() => {
      expect(screen.getByText('children')).toBeInTheDocument();
    });
  });
});
