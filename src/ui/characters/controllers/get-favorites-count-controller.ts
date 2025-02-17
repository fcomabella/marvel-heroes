import { GetFavoritesUseCaseResult } from '@core/characters/application/models';
import { GetFavoritesCountControllerResult } from '@ui/characters/models';

export const GetFavoritesCountController = ({
  getFavoritesUseCase,
}: {
  getFavoritesUseCase: GetFavoritesUseCaseResult;
}): GetFavoritesCountControllerResult => {
  return async () => {
    const favorites = await getFavoritesUseCase();
    return favorites.length;
  };
};
