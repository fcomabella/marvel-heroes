import { UnsetIsFavoriteUseCaseResult } from '@core/characters/application/models/unset-is-favorite-use-case-result';
import { CharacterSummary } from '@ui/characters/models';

export const UnsetIsFavoriteController = ({
  unsetIsFavoriteUseCase,
}: {
  unsetIsFavoriteUseCase: UnsetIsFavoriteUseCaseResult;
}) => {
  return (character: CharacterSummary): Promise<void> =>
    unsetIsFavoriteUseCase(character);
};
