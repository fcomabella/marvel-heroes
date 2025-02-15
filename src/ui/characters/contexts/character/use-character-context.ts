import { CharacterContext } from '@ui/characters/contexts/character/character-context';
import { CharacterDetails } from '@ui/characters/models/character-details';
import { useContext } from 'react';

export const useCharacterContext = (): CharacterDetails => {
  const value = useContext(CharacterContext);

  if (!value) {
    throw new Error(
      'useCharacterContext must be used inside a CharactersContextProvider'
    );
  }

  return value;
};
