import { SearchCharactersUseCaseResult } from '@core/characters/application/models';
import { Character } from '@core/characters/domain/models/character';
import { Container } from '@core/shared/domain/models';
import {
  CharacterList,
  CharacterSummary,
  SearchCharactersControllerResult,
} from '@ui/characters/models';
import { getImageUrl } from '@ui/shared/utils';

const mapper = (dto: Container<Character>): CharacterList => {
  const { count, results } = dto;

  return {
    results: count,
    characters: results.map<CharacterSummary>(({ id, name, thumbnail }) => {
      return {
        id,
        name,
        isFavorite: false,
        thumbnail: getImageUrl(thumbnail, 'portrait_fantastic'),
      };
    }),
  };
};

export const SearchCharactersController = ({
  searchCharactersUseCase,
}: {
  searchCharactersUseCase: SearchCharactersUseCaseResult;
}): SearchCharactersControllerResult => {
  return async (search?: string, limit?: number) => {
    const searchResult = await searchCharactersUseCase(search, limit);
    return mapper(searchResult);
  };
};
