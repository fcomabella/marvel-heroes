import { Link } from '@tanstack/react-router';
import { Favorites } from '@ui/components/favorites';
import { HeaderProps } from '@ui/components/header/header-props';
import { HeaderRoot } from '@ui/components/header/header-root';
import { MarvelLogo } from '@ui/components/marvel-logo';
import { ReactNode } from 'react';

export const Header = ({ isLoading = false }: HeaderProps): ReactNode => (
  <HeaderRoot isLoading={isLoading}>
    <Link to="/">
      <MarvelLogo aria-label="Home" />
    </Link>
    <Link to="/favorites">
      <Favorites />
    </Link>
  </HeaderRoot>
);
