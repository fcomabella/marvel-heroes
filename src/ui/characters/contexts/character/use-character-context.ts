import { CharacterContext } from '@ui/characters/contexts/character/character-context';
import { ComicDetails } from '@ui/characters/models';
import { CharacterDetails } from '@ui/characters/models/character-details';
import { useContext } from 'react';

export const useCharacterContext = (): {
  character: CharacterDetails;
  comics: Array<ComicDetails>;
} => {
  const value = useContext(CharacterContext);

  if (!value) {
    throw new Error(
      'useCharacterContext must be used inside a CharactersContextProvider'
    );
  }

  return value;
};
