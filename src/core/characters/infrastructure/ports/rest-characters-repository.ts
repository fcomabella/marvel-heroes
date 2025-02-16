import {
  Comic,
  GetCharacterComicsResult,
  SearchCharactersResult,
} from '@core/characters/domain/models';
import { Character } from '@core/characters/domain/models/character';
import { CharactersRepository } from '@core/characters/domain/ports/characters-repository';
import { CHARACTERS_BASE_URL } from '@core/characters/infrastructure/constants';
import { characterDtoSchema } from '@core/characters/infrastructure/schemas';
import { comicDtoSchema } from '@core/characters/infrastructure/schemas/comic-dto-schema';
import { DEFAULT_RETURN_LIMIT } from '@core/shared/infrastructure/constants';
import { unWrap } from '@core/shared/infrastructure/utils';

export const RestCharactersRepository: CharactersRepository = ({ fetchFn }) => {
  return {
    searchCharacters: async (
      search,
      limit = DEFAULT_RETURN_LIMIT
    ): SearchCharactersResult => {
      const url = new URL(CHARACTERS_BASE_URL);

      if (search) {
        url.searchParams.append('nameStartsWith', search);
      }

      url.searchParams.append('limit', limit.toString());

      return unWrap<Character>(await fetchFn(url), characterDtoSchema);
    },
    getCharacterById: async (id): SearchCharactersResult => {
      const url = new URL(`${CHARACTERS_BASE_URL}/${id}`);
      return unWrap<Character>(await fetchFn(url), characterDtoSchema);
    },

    getCharacterComics: async (id): GetCharacterComicsResult => {
      const url = new URL(`${CHARACTERS_BASE_URL}/${id}/comics`);

      url.searchParams.append('orderBy', 'onsaleDate');
      url.searchParams.append('limit', '20');

      return unWrap<Comic>(await fetchFn(url), comicDtoSchema);
    },
  };
};
