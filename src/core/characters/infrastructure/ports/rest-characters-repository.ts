import { SearchCharactersResult } from '@core/characters/domain/models';
import { Character } from '@core/characters/domain/models/character';
import { CharactersRepository } from '@core/characters/domain/ports/characters-repository';
import { CHARACTERS_BASE_URL } from '@core/characters/infrastructure/constants';
import {
  CharacterDtoSchema,
  characterDtoSchema,
} from '@core/characters/infrastructure/schemas';
import { DEFAULT_RETURN_LIMIT } from '@core/shared/infrastructure/constants';
import { isWrapper } from '@core/shared/infrastructure/type-guards';

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

      const wrapper = await fetchFn(url);

      if (
        isWrapper<Character, CharacterDtoSchema>(wrapper, characterDtoSchema)
      ) {
        return wrapper.data;
      }

      throw new Error('Server has sent invalid data');
    },
    getCharacterById: async (id): SearchCharactersResult => {
      const url = new URL(`${CHARACTERS_BASE_URL}/${id}`);

      const wrapper = await fetchFn(url);

      if (
        isWrapper<Character, CharacterDtoSchema>(wrapper, characterDtoSchema)
      ) {
        return wrapper.data;
      }

      throw new Error('Server has sent invalid data');
    },
  };
};
