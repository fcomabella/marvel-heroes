import { render, screen } from '@testing-library/react';
import { CharacterCard } from '../character-card';
import { CharacterCardProps } from '../character-card-props';
import { HeartIcon, HeartIconProps } from '@ui/components/heart-icon';

vi.mock('@ui/components/heart-icon', () => ({
  HeartIcon: vi.fn(),
}));
describe('CharacterCard component', () => {
  it('Should render', () => {
    const props: CharacterCardProps = {
      image: 'example.hero.png',
      name: 'Test hero',
    };
    render(<CharacterCard {...props} />);

    expect(screen.getByRole('paragraph')).toHaveTextContent(props.name);
    expect(screen.getByRole('img')).toHaveAttribute('src', props.image);
    expect(HeartIcon).toHaveBeenCalledWith(
      expect.objectContaining<HeartIconProps>({ unselected: true }),
      undefined
    );
  });

  it('Should render favorite', () => {
    const props: CharacterCardProps = {
      image: 'example.hero.png',
      name: 'Test hero',
      isFavorite: true,
    };
    render(<CharacterCard {...props} />);

    expect(screen.getByRole('paragraph')).toHaveTextContent(props.name);
    expect(screen.getByRole('img')).toHaveAttribute('src', props.image);
    expect(HeartIcon).toHaveBeenCalledWith(
      expect.objectContaining<HeartIconProps>({ unselected: false }),
      undefined
    );
  });
});
