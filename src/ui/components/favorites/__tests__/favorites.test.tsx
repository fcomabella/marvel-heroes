import { render, screen } from '@testing-library/react';
import { Favorites } from '../favorites';

describe('Favorites component', () => {
  it('Should render', () => {
    expect(() => render(<Favorites />)).not.toThrow();
  });

  it('Should display 0 favorites as default', () => {
    render(<Favorites />);

    expect(screen.getByLabelText('Favorites')).toHaveTextContent('0');
  });

  it('Should display the total count of favorites', () => {
    const count = 4;
    render(<Favorites totalFavorites={count} />);

    expect(screen.getByLabelText('Favorites')).toHaveTextContent(
      count.toString(10)
    );
  });
});
