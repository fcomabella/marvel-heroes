import { SearchCharactersResult } from '@core/characters/domain/models';

export type SearchCharactersUseCaseResult = (
  search?: string,
  limit?: number
) => SearchCharactersResult;
