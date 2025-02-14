import { render, screen } from '@testing-library/react';
import { CharacterCard } from '../character-card';
import { CharacterCardProps } from '../character-card-props';
import { HeartIcon, HeartIconProps } from '@ui/components/heart-icon';
import { CharacterSummary } from '@ui/characters/models';

vi.mock('@ui/components/heart-icon', () => ({
  HeartIcon: vi.fn(),
}));
describe('CharacterCard component', () => {
  it('Should render', () => {
    const character: CharacterSummary = {
      id: 1,
      isFavorite: false,
      thumbnail: 'example.hero.png',
      name: 'Test hero',
    };

    const props: CharacterCardProps = { character };
    render(<CharacterCard {...props} />);

    expect(screen.getByRole('paragraph')).toHaveTextContent(character.name);
    expect(screen.getByRole('img')).toHaveAttribute('src', character.thumbnail);
    expect(HeartIcon).toHaveBeenCalledWith(
      expect.objectContaining<HeartIconProps>({ unselected: true }),
      undefined
    );
  });

  it('Should render favorite', () => {
    const character: CharacterSummary = {
      id: 1,
      isFavorite: true,
      thumbnail: 'example.hero.png',
      name: 'Test hero',
    };

    const props: CharacterCardProps = { character };

    render(<CharacterCard {...props} />);

    expect(screen.getByRole('paragraph')).toHaveTextContent(character.name);
    expect(screen.getByRole('img')).toHaveAttribute('src', character.thumbnail);
    expect(HeartIcon).toHaveBeenCalledWith(
      expect.objectContaining<HeartIconProps>({ unselected: false }),
      undefined
    );
  });
});
