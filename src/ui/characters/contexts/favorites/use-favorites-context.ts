import { FavoritesContext } from '@ui/characters/contexts/favorites/favorites-context';
import { CharacterList } from '@ui/characters/models';
import { useContext } from 'react';

export const useFavoritesContext = (): CharacterList => {
  const value = useContext(FavoritesContext);

  if (!value) {
    throw new Error(
      'useFavoritesContext must be used inside a FavoritesContextProvider'
    );
  }

  return value;
};
