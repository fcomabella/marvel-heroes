import { searchCharactersControllerMock } from 'src/__mocks__/container.mock';
import { renderWithQueryProvider } from '@__tests__/render-with-query-provider';
import { render, screen, waitFor } from '@testing-library/react';
import { CharactersProvider } from '@ui/characters/contexts/characters';
import { CharacterListMother } from '@ui/characters/models/__tests__/character-list-mother';
import { CharacterList } from '@ui/characters/widgets/character-list/character-list';

describe('CharacterListWidget', () => {
  it('Should be used inside a CharactersContextProvider', () => {
    expect(() => render(<CharacterList />)).toThrow();
  });

  it('Should render the list', async () => {
    const characterList = CharacterListMother();

    searchCharactersControllerMock.mockResolvedValue(characterList);

    renderWithQueryProvider(
      <CharactersProvider>
        <CharacterList />
      </CharactersProvider>
    );

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
