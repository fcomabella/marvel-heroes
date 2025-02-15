import { CharacterDetails } from '@ui/characters/models/character-details';
import { createContext } from 'react';

export const CharacterContext = createContext<CharacterDetails | undefined>(
  undefined
);
