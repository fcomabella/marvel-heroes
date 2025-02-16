import { getCharacterControllerMock } from '@__mocks__/container.mock';
import { useParamsMock } from '@__mocks__/react-router.mock';
import { renderWithCharacterProvider } from '@__tests__/render-with-character-provider';
import { render, screen, waitFor } from '@testing-library/react';
import { CharacterDetailsMother } from '@ui/characters/models/__tests__/character-details-mother';
import { ComicDetailsMother } from '@ui/characters/models/__tests__/comic-details-mother';
import { Character } from '@ui/characters/widgets/character/character';

describe('Character widget', () => {
  const characterId = 'test-id';

  beforeEach(() => {
    useParamsMock.mockReturnValueOnce({ characterId });
  });
  it('Should be used inside a CharacterContextProvider', () => {
    expect(() => render(<Character />)).toThrow();
  });

  it('Should render the character', async () => {
    const character = CharacterDetailsMother();
    const comics = [ComicDetailsMother()];

    getCharacterControllerMock.mockResolvedValueOnce({ character, comics });

    renderWithCharacterProvider(<Character />);

    await waitFor(() => {
      const image = screen.getByRole('img');
      const name = screen.getByText(character.name);
      const description = screen.getByText(character.description);
      expect(image).toHaveAttribute('src', character.thumbnail);
      expect(name).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});
