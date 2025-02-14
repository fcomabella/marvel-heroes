import { SearchCharactersResult } from '@core/characters/domain/models/search-characters-result';

export type SearchCharactersFn = (
  search?: string,
  limit?: number
) => SearchCharactersResult;
