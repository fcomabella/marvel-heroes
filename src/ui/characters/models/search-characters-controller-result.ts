import { CharacterList } from '@ui/characters/models/character-list';

export type SearchCharactersControllerResult = (
  search?: string,
  limit?: number
) => Promise<CharacterList>;
