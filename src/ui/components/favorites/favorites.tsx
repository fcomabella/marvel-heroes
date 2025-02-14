import { ReactNode } from 'react';
import { FavoritesProps } from './favorites-props';
import { FavoritesRoot } from './favorites-root';
import { HeartIcon } from '../heart-icon';
import { FavoritesCount } from '@ui/components/favorites/favorites-count';

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
