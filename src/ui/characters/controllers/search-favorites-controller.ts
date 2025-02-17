import {
  GetFavoritesUseCaseResult,
  SearchCharactersUseCaseResult,
} from '@core/characters/application/models';
import { Character } from '@core/characters/domain/models';
import { Container } from '@core/shared/domain/models';
import {
  CharacterList,
  CharacterSummary,
  SearchFavoritesControllerResult,
} from '@ui/characters/models';
import { getImageUrl } from '@ui/shared/utils';

const mapper = (
  charactersDto: Container<Character>,
  favoritesDto: Array<number>
): CharacterList => {
  const { results } = charactersDto;
  const favoritesSet = new Set(favoritesDto);

  const favoriteCharacters = results
    .filter(({ id }) => favoritesSet.has(id))
    .map<CharacterSummary>(({ id, name, thumbnail }) => {
      return {
        id,
        name,
        isFavorite: favoritesSet.has(id),
        thumbnail: getImageUrl(thumbnail, 'portrait_fantastic'),
      };
    });

  return {
    results: favoriteCharacters.length,
    characters: favoriteCharacters,
  };
};

export const SearchFavoritesController = ({
  searchCharactersUseCase,
  getFavoritesUseCase,
}: {
  searchCharactersUseCase: SearchCharactersUseCaseResult;
  getFavoritesUseCase: GetFavoritesUseCaseResult;
}): SearchFavoritesControllerResult => {
  return async (search?: string, limit?: number) => {
    const [searchResult, favorites] = await Promise.all([
      searchCharactersUseCase(search, limit),
      getFavoritesUseCase(),
    ]);

    return mapper(searchResult, favorites);
  };
};
