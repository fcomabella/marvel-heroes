import { Link } from '@tanstack/react-router';
import { Favorites } from '@ui/components/favorites';
import { MarvelLogo } from '@ui/components/marvel-logo';
import { ReactNode } from 'react';
import { HeaderProps } from './header-props';
import { HeaderRoot } from './header-root';
import { useFavoritesCount } from '@ui/characters/hooks/use-favorites-count';

export const Header = ({ isLoading = false }: HeaderProps): ReactNode => {
  const totalFavorites = useFavoritesCount();

  return (
    <HeaderRoot isLoading={isLoading}>
      <Link to="/">
        <MarvelLogo aria-label="Home" />
      </Link>
      <Link to="/favorites">
        <Favorites totalFavorites={totalFavorites} />
      </Link>
    </HeaderRoot>
  );
};
