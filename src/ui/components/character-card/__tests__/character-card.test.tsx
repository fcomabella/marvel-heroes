import { act, screen } from '@testing-library/react';
import { CharacterCard } from '../character-card';
import { CharacterCardProps } from '../character-card-props';
import { HeartIcon, HeartIconProps } from '@ui/components/heart-icon';
import { CharacterSummary } from '@ui/characters/models';
import { renderWithRouter } from '@__tests__/render-with-router';

vi.mock('@ui/components/heart-icon', () => ({
  HeartIcon: vi.fn(),
}));
describe('CharacterCard component', () => {
  it('Should render', async () => {
    const character: CharacterSummary = {
      id: 1,
      isFavorite: false,
      thumbnail: 'example.hero.png',
      name: 'Test hero',
    };

    const props: CharacterCardProps = { character };
    await act(() => renderWithRouter(<CharacterCard {...props} />));

    expect(screen.getByRole('paragraph')).toHaveTextContent(character.name);
    expect(screen.getByRole('img')).toHaveAttribute('src', character.thumbnail);
    expect(HeartIcon).toHaveBeenCalledWith(
      expect.objectContaining<HeartIconProps>({ unselected: true }),
      undefined
    );
  });

  it('Should render favorite', async () => {
    const character: CharacterSummary = {
      id: 1,
      isFavorite: true,
      thumbnail: 'example.hero.png',
      name: 'Test hero',
    };

    const props: CharacterCardProps = { character };

    await act(() => renderWithRouter(<CharacterCard {...props} />));

    expect(screen.getByRole('paragraph')).toHaveTextContent(character.name);
    expect(screen.getByRole('img')).toHaveAttribute('src', character.thumbnail);
    expect(HeartIcon).toHaveBeenCalledWith(
      expect.objectContaining<HeartIconProps>({ unselected: false }),
      undefined
    );
  });
});
