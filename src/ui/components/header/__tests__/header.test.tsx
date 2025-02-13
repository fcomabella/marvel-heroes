import { renderWithRouter } from '@__tests__/render-with-router';
import { screen } from '@testing-library/dom';
import { Header } from '@ui/components/header/header';

describe('Header component', () => {
  it('Should render', () => {
    renderWithRouter(<Header />);

    const marvelLink = screen.getByRole('link', { name: 'Home' });
    const favoritesLink = screen.getByRole('link', { name: 'Favorites' });

    expect(marvelLink).toHaveAttribute('href', '/');
    expect(favoritesLink).toHaveAttribute('href', '/favorites');
  });
});
