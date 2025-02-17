import { CharactersRepositoryResult } from './characters-repository-result';

export type CharactersRepository = (params: {
  fetchFn: (url: URL) => Promise<unknown>;
}) => CharactersRepositoryResult;
