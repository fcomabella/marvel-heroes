import { CharactersContext } from '@ui/characters/contexts/characters/characters-context';
import { CharacterList } from '@ui/characters/models';
import { useContext } from 'react';

export const useCharactersContext = (): CharacterList => {
  const value = useContext(CharactersContext);

  if (!value) {
    throw new Error(
      'useCharactersContext must be used inside a CharactersContextProvider'
    );
  }

  return value;
};
