import { UnsetIsFavoriteUseCaseResult } from '@core/characters/application/models/unset-is-favorite-use-case-result';

export const UnsetIsFavoriteController = ({
  unsetIsFavoriteUseCase,
}: {
  unsetIsFavoriteUseCase: UnsetIsFavoriteUseCaseResult;
}) => {
  return (id: number): Promise<void> => unsetIsFavoriteUseCase(id);
};
