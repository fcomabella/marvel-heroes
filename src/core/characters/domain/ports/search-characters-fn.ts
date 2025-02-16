import { SearchCharactersResult } from '@core/characters/domain/ports/search-characters-result';

export type SearchCharactersFn = (
  search?: string,
  limit?: number
) => SearchCharactersResult;
