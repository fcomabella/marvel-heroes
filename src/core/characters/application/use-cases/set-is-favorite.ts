import { SetIsFavoriteUseCaseResult } from '@core/characters/application/models';
import { CharactersRepositoryResult } from '@core/characters/domain/ports';

export const SetIsFavorite = ({
  charactersRepository,
}: {
  charactersRepository: CharactersRepositoryResult;
}): SetIsFavoriteUseCaseResult => {
  return (id: number): Promise<void> => {
    return charactersRepository.setIsFavorite(id);
  };
};
