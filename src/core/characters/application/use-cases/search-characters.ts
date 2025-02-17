import { SearchCharactersUseCaseResult } from '@core/characters/application/models';
import { CharactersRepositoryResult } from '@core/characters/domain/ports';

export const SearchCharacters = ({
  charactersRepository,
}: {
  charactersRepository: CharactersRepositoryResult;
}): SearchCharactersUseCaseResult => {
  return (search?: string, limit?: number) => {
    return charactersRepository.searchCharacters(search, limit);
  };
};
