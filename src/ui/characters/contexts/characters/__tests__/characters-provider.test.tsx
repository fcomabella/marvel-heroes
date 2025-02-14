import { searchCharactersControllerMock } from 'src/__mocks__/container.mock';
import { PromiseMother } from 'src/__mocks__/promise-mother';
import { renderWithQueryProvider } from '@__tests__/render-with-query-provider';
import { render, screen, waitFor } from '@testing-library/react';
import { CharactersProvider } from '@ui/characters/contexts/characters/characters-provider';
import { CharacterList } from '@ui/characters/models';
import { CharacterListMother } from '@ui/characters/models/__tests__/character-list-mother';

describe('CharactersProvider component', () => {
  it('Should require a QueryProvider', () => {
    expect(() =>
      render(<CharactersProvider>children</CharactersProvider>)
    ).toThrow();
  });

  it('Should display the loading status', async () => {
    const { promise, resolve } = PromiseMother<CharacterList>();

    searchCharactersControllerMock.mockReturnValue(promise);

    renderWithQueryProvider(<CharactersProvider>children</CharactersProvider>);

    const loading = screen.getByRole('paragraph');

    expect(loading).toHaveTextContent(/loading.../i);

    resolve(CharacterListMother());

    return await promise;
  });

  it('Should display an error message', async () => {
    const error = new Error('Test error');

    const { promise, reject } = PromiseMother<CharacterList>();

    searchCharactersControllerMock.mockReturnValue(promise);

    renderWithQueryProvider(<CharactersProvider>children</CharactersProvider>, {
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

    renderWithQueryProvider(<CharactersProvider>children</CharactersProvider>, {
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

    renderWithQueryProvider(
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
