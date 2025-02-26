import {
  GetFavoritesUseCaseResult,
  SearchCharactersUseCaseResult,
} from '@core/characters/application/models';
import { Character } from '@core/characters/domain/models/character';
import { Container } from '@core/shared/domain/models';
import {
  CharacterList,
  CharacterSummary,
  SearchCharactersControllerResult,
} from '@ui/characters/models';
import { getImageUrl } from '@ui/shared/utils';

const mapper = (
  charactersDto: Container<Character>,
  favoritesDto: Array<CharacterSummary>
): CharacterList => {
  const { count, results } = charactersDto;
  const favoritesSet = new Set(favoritesDto.map(({ id }) => id));

  return {
    results: count,
    characters: results.map<CharacterSummary>(({ id, name, thumbnail }) => {
      return {
        id,
        name,
        isFavorite: favoritesSet.has(id),
        thumbnail: getImageUrl(thumbnail, 'portrait_fantastic'),
      };
    }),
  };
};

export const SearchCharactersController = ({
  searchCharactersUseCase,
  getFavoritesUseCase,
}: {
  searchCharactersUseCase: SearchCharactersUseCaseResult;
  getFavoritesUseCase: GetFavoritesUseCaseResult;
}): SearchCharactersControllerResult => {
  return async (search?: string, limit?: number) => {
    const [searchResult, favorites] = await Promise.all([
      searchCharactersUseCase(search, limit),
      getFavoritesUseCase(),
    ]);

    return mapper(searchResult, favorites);
  };
};
