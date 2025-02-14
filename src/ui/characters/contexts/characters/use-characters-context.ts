import {
  CharactersContext,
  CharactersContextValue,
} from '@ui/characters/contexts/characters/characters-context';
import { useContext } from 'react';

export const useCharactersContext = (): CharactersContextValue => {
  const value = useContext(CharactersContext);

  if (!value) {
    throw new Error(
      'useCharactersContext must be used inside a CharactersContextProvider'
    );
  }

  return value;
};
