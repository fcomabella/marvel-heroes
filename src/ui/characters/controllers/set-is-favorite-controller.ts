import { SetIsFavoriteUseCaseResult } from '@core/characters/application/models';
import { CharacterSummary } from '@ui/characters/models';

export const SetIsFavoriteController = ({
  setIsFavoriteUseCase,
}: {
  setIsFavoriteUseCase: SetIsFavoriteUseCaseResult;
}) => {
  return (character: CharacterSummary): Promise<void> =>
    setIsFavoriteUseCase(character);
};
