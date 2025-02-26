import { GetFavoritesUseCaseResult } from '@core/characters/application/models';
import { SearchFavoritesControllerResult } from '@ui/characters/models';

export const SearchFavoritesController = ({
  getFavoritesUseCase,
}: {
  getFavoritesUseCase: GetFavoritesUseCaseResult;
}): SearchFavoritesControllerResult => {
  return async (search?: string, limit?: number) => {
    const favorites = (await getFavoritesUseCase())
      .sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }

        return 0;
      })
      .filter((character) =>
        search ? character.name.startsWith(search) : true
      )
      .slice(0, limit);

    return {
      results: favorites.length,
      characters: favorites,
    };
  };
};
