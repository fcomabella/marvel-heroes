import { CharacterDetails } from '@ui/characters/models/character-details';

export type GetCharacterControllerResult = (
  id: string
) => Promise<CharacterDetails>;
