import { useParamsMock } from '@__mocks__/react-router.mock';
import { getCharacterControllerMock } from '@__mocks__/container.mock';
import { PromiseMother } from '@__mocks__/promise-mother';
import { renderWithRouter } from '@__tests__/render-with-router';
import { CharacterProvider } from '@ui/characters/contexts/character/character-provider';
import { CharacterDetails } from '@ui/characters/models';
import { CharacterDetailsMother } from '@ui/characters/models/__tests__/character-details-mother';
import { screen, waitFor } from '@testing-library/dom';

describe('CharacterProvider component', () => {
  beforeEach(() => {
    const characterId = 'test-id';
    useParamsMock.mockReturnValueOnce({ characterId });
  });

  it('Should display the loading status', async () => {
    const Header = vi.fn().mockReturnValue(null);
    const { promise, resolve } = PromiseMother<CharacterDetails>();

    getCharacterControllerMock.mockReturnValueOnce(promise);

    renderWithRouter(
      <CharacterProvider Header={Header}>children</CharacterProvider>
    );

    expect(Header).toHaveBeenCalledWith({ isLoading: true }, undefined);

    resolve(CharacterDetailsMother());

    return await promise;
  });

  it('Should display an error message', async () => {
    const error = new Error('Test error');

    const { promise, reject } = PromiseMother<CharacterDetails>();

    getCharacterControllerMock.mockReturnValue(promise);

    renderWithRouter(<CharacterProvider>children</CharacterProvider>, {
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

    const { promise, reject } = PromiseMother<CharacterDetails>();

    getCharacterControllerMock.mockReturnValue(promise);

    renderWithRouter(<CharacterProvider>children</CharacterProvider>, {
      queryConfig: { defaultOptions: { queries: { retry: false } } },
    });

    reject(error);

    await waitFor(() => {
      const errorText = screen.getByRole('paragraph');
      expect(errorText).toHaveTextContent('Error: Unknown error');
    });
  });

  it('Should render the children', async () => {
    const characterList = CharacterDetailsMother();
    const { promise, resolve } = PromiseMother<CharacterDetails>();

    getCharacterControllerMock.mockReturnValue(promise);

    renderWithRouter(
      <CharacterProvider>
        <p>children</p>
      </CharacterProvider>
    );

    resolve(characterList);

    await waitFor(() => {
      expect(screen.getByText('children')).toBeInTheDocument();
    });
  });
});
