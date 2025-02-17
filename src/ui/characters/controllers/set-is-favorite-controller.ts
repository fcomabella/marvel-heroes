import { SetIsFavoriteUseCaseResult } from '@core/characters/application/models';

export const SetIsFavoriteController = ({
  setIsFavoriteUseCase,
}: {
  setIsFavoriteUseCase: SetIsFavoriteUseCaseResult;
}) => {
  return (id: number): Promise<void> => setIsFavoriteUseCase(id);
};
