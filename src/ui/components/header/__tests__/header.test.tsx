import { renderWithRouter } from '@__tests__/render-with-router';
import { screen, waitFor } from '@testing-library/dom';
import { Header } from '@ui/components/header/header';

describe('Header component', () => {
  it('Should render', async () => {
    renderWithRouter(<Header />);

    const marvelLink = screen.getByRole('link', { name: 'Home' });
    const favoritesLink = screen.getByRole('link', { name: 'Favorites' });
    const headerRoot = screen.getByRole('banner');

    expect(marvelLink).toHaveAttribute('href', '/');
    expect(favoritesLink).toHaveAttribute('href', '/favorites');

    await waitFor(() =>
      expect(window.getComputedStyle(headerRoot)).toEqual(
        expect.objectContaining({ 'background-size': 'auto 0,cover' })
      )
    );
  });

  it('Should display the loading status', async () => {
    renderWithRouter(<Header isLoading />);

    const headerRoot = screen.getByRole('banner');

    await waitFor(() =>
      expect(window.getComputedStyle(headerRoot)).toEqual(
        expect.objectContaining({ 'background-size': 'auto 6px,cover' })
      )
    );
  });
});
