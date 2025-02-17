import { UnsetIsFavoriteUseCaseResult } from '@core/characters/application/models/unset-is-favorite-use-case-result';
import { CharactersRepositoryResult } from '@core/characters/domain/ports';

export const UnsetIsFavorite = ({
  charactersRepository,
}: {
  charactersRepository: CharactersRepositoryResult;
}): UnsetIsFavoriteUseCaseResult => {
  return (id: number): Promise<void> => {
    return charactersRepository.unsetIsFavorite(id);
  };
};
