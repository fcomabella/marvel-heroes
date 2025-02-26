import { SetIsFavoriteUseCaseResult } from '@core/characters/application/models';
import { CharactersRepositoryResult } from '@core/characters/domain/ports';
import { CharacterSummary } from '@ui/characters/models';

export const SetIsFavorite = ({
  charactersRepository,
}: {
  charactersRepository: CharactersRepositoryResult;
}): SetIsFavoriteUseCaseResult => {
  return (character: CharacterSummary): Promise<void> => {
    return charactersRepository.setIsFavorite({
      ...character,
      isFavorite: true,
    });
  };
};
