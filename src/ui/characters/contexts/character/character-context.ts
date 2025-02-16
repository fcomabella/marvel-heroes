import { ComicDetails } from '@ui/characters/models';
import { CharacterDetails } from '@ui/characters/models/character-details';
import { createContext } from 'react';

export const CharacterContext = createContext<
  { character: CharacterDetails; comics: Array<ComicDetails> } | undefined
>(undefined);
