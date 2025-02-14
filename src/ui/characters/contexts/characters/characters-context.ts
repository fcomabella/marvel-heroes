import { CharacterList } from '@ui/characters/models';
import { createContext } from 'react';

export interface CharactersContextValue {
  characterList: CharacterList;
  setSearchTerm: (search: string) => void;
}

export const CharactersContext = createContext<
  CharactersContextValue | undefined
>(undefined);
