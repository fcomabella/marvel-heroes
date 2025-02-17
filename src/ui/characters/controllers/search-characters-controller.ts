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
  favoritesDto: Array<number>
): CharacterList => {
  const { count, results } = charactersDto;
  const favoritesSet = new Set(favoritesDto);

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
    const searchResult = await searchCharactersUseCase(search, limit);
    const favorites = await getFavoritesUseCase();
    return mapper(searchResult, favorites);
  };
};
