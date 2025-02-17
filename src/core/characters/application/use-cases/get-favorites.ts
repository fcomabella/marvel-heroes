import { GetFavoritesUseCaseResult } from '@core/characters/application/models';
import { CharactersRepositoryResult } from '@core/characters/domain/ports';

export const GetFavorites = ({
  charactersRepository,
}: {
  charactersRepository: CharactersRepositoryResult;
}): GetFavoritesUseCaseResult => {
  return () => {
    return charactersRepository.getFavorites();
  };
};
