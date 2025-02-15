import { CharacterList } from '@ui/characters/models';
import { createContext } from 'react';

export const CharactersContext = createContext<CharacterList | undefined>(
  undefined
);
