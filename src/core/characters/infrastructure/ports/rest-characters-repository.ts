import { Comic } from '@core/characters/domain/models';
import { Character } from '@core/characters/domain/models/character';
import {
  GetCharacterComicsResult,
  SearchCharactersResult,
} from '@core/characters/domain/ports';
import { CharactersRepository } from '@core/characters/domain/ports/characters-repository';
import {
  CHARACTERS_BASE_URL,
  FAVORITE_CHARACTERS_KEY,
} from '@core/characters/infrastructure/constants';
import { characterDtoSchema } from '@core/characters/infrastructure/schemas';
import { comicDtoSchema } from '@core/characters/infrastructure/schemas/comic-dto-schema';
import { parseFavorites } from '@core/characters/infrastructure/utils/parse-favorites';
import { DEFAULT_RETURN_LIMIT } from '@core/shared/infrastructure/constants';
import { unWrap } from '@core/shared/infrastructure/utils';
import { CharacterSummary } from '@ui/characters/models';

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

    getFavorites: async (): Promise<Array<CharacterSummary>> => {
      return parseFavorites(localStorage.getItem(FAVORITE_CHARACTERS_KEY));
    },

    setIsFavorite: async (character: CharacterSummary): Promise<void> => {
      const favorites = parseFavorites(
        localStorage.getItem(FAVORITE_CHARACTERS_KEY)
      );
      const favoritesMap = new Map(
        favorites.map((characterSummary) => [
          characterSummary.id,
          characterSummary,
        ])
      );

      favoritesMap.set(character.id, character);

      localStorage.setItem(
        FAVORITE_CHARACTERS_KEY,
        JSON.stringify(Array.from(favoritesMap.values()))
      );
    },

    unsetIsFavorite: async (character: CharacterSummary): Promise<void> => {
      const favorites = parseFavorites(
        localStorage.getItem(FAVORITE_CHARACTERS_KEY)
      );
      const favoritesMap = new Map(
        favorites.map((characterSummary) => [
          characterSummary.id,
          characterSummary,
        ])
      );
      favoritesMap.delete(character.id);

      localStorage.setItem(
        FAVORITE_CHARACTERS_KEY,
        JSON.stringify(Array.from(favoritesMap.values()))
      );
    },
  };
};
