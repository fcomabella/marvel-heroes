import { ReactNode } from 'react';
import { FavoritesProps } from './favorites-props';
import { FavoritesRoot } from './favorites-root';
import { FavoritesCount } from '@ui/components/favorites/favorites-count';
import { HeartIcon } from '@ui/components/heart-icon';

export const Favorites = ({
  totalFavorites = 0,
}: FavoritesProps): ReactNode => (
  <FavoritesRoot>
    <HeartIcon />
    <FavoritesCount
      aria-label="Favorites"
      aria-description="View your favorite heroes"
    >
      {totalFavorites}
    </FavoritesCount>
  </FavoritesRoot>
);
