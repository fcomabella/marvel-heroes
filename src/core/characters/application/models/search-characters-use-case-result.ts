import { SearchCharactersResult } from '@core/characters/domain/ports';

export type SearchCharactersUseCaseResult = (
  search?: string,
  limit?: number
) => SearchCharactersResult;
