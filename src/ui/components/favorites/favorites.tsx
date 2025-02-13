import { ReactNode } from 'react';
import { FavoritesProps } from './favorites-props';
import { FavoritesRoot } from './favorites-root';
import { HeartIcon } from '../heart-icon';

export const Favorites = ({
  totalFavorites = 0,
}: FavoritesProps): ReactNode => (
  <FavoritesRoot>
    <HeartIcon />
    <div aria-label="Favorites" aria-description="View your favorite heroes">
      {totalFavorites}
    </div>
  </FavoritesRoot>
);
