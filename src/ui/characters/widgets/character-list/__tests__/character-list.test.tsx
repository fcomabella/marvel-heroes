import { searchCharactersControllerMock } from '@__mocks__/container.mock';
import { render, screen, waitFor } from '@testing-library/react';
import { CharacterListMother } from '@ui/characters/models/__tests__/character-list-mother';
import { CharacterList } from '@ui/characters/widgets/character-list/character-list';
import { renderWithCharactersProvider } from '@__tests__/render-with-characters-provider';

describe('CharacterList widget', () => {
  it('Should be used inside a CharactersContextProvider', () => {
    expect(() => render(<CharacterList />)).toThrow();
  });

  it('Should render the list', async () => {
    const characterList = CharacterListMother();

    searchCharactersControllerMock.mockResolvedValue(characterList);

    renderWithCharactersProvider(<CharacterList />);

    await waitFor(() => {
      expect(screen.getByTestId('results-paragraph')).toHaveTextContent(
        `${characterList.results} RESULTS`
      );
      characterList.characters.forEach((character) => {
        expect(screen.getByText(character.name)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute(
          'src',
          character.thumbnail
        );
        expect(
          screen.getByTestId(
            character.isFavorite ? 'selected-heart' : 'unselected-heart'
          )
        ).toBeInTheDocument();
      });
    });
  });
});
