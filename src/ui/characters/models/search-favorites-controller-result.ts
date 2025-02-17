import { CharacterList } from '@ui/characters/models/character-list';

export type SearchFavoritesControllerResult = (
  search?: string,
  limit?: number
) => Promise<CharacterList>;
