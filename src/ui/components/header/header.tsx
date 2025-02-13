import styled from '@emotion/styled';
import { Link } from '@tanstack/react-router';
import { Favorites } from '@ui/components/favorites';
import { HeaderProps } from '@ui/components/header/header-props';
import { MarvelLogo } from '@ui/components/marvel-logo';
import { ReactNode } from 'react';

const HeaderContainer = styled('header')({
  padding: '16px',
  background: '#000000',
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Header = ({ totalFavorites = 0 }: HeaderProps): ReactNode => (
  <HeaderContainer>
    <Link to="/">
      <MarvelLogo aria-label="Home" />
    </Link>
    <Link to="/favorites">
      <Favorites totalFavorites={totalFavorites} />
    </Link>
  </HeaderContainer>
);
