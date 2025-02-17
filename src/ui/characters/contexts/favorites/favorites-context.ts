import { CharacterList } from '@ui/characters/models';
import { createContext } from 'react';

export const FavoritesContext = createContext<CharacterList | undefined>(
  undefined
);
