import { UnsetIsFavoriteUseCaseResult } from '@core/characters/application/models/unset-is-favorite-use-case-result';
import { CharactersRepositoryResult } from '@core/characters/domain/ports';
import { CharacterSummary } from '@ui/characters/models';

export const UnsetIsFavorite = ({
  charactersRepository,
}: {
  charactersRepository: CharactersRepositoryResult;
}): UnsetIsFavoriteUseCaseResult => {
  return (character: CharacterSummary): Promise<void> => {
    return charactersRepository.unsetIsFavorite(character);
  };
};
