import { CharactersRepositoryResult } from '@core/characters/domain/models';

export type CharactersRepository = (params: {
  fetchFn: (url: URL) => Promise<unknown>;
}) => CharactersRepositoryResult;
