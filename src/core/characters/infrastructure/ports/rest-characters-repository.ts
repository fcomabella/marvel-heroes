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
import { isFavorites } from '@core/characters/infrastructure/type-guards/is-favorites';
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

    getFavorites: async (): Promise<Array<number>> => {
      const favoritesString = localStorage.getItem(FAVORITE_CHARACTERS_KEY);

      try {
        const favorites = JSON.parse(favoritesString ?? '[]');

        if (!isFavorites(favorites)) {
          throw new Error('Server has sent invalid data');
        }

        return favorites;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_error) {
        throw new Error('Server has sent invalid data');
      }
    },

    setIsFavorite: async (id: number): Promise<void> => {
      const favoritesString = localStorage.getItem(FAVORITE_CHARACTERS_KEY);

      try {
        const favorites = JSON.parse(favoritesString ?? '[]');

        if (!isFavorites(favorites)) {
          throw new Error('Server has sent invalid data');
        }

        const favoritesSet = new Set(favorites);

        favoritesSet.add(id);

        localStorage.setItem(
          FAVORITE_CHARACTERS_KEY,
          JSON.stringify(Array.from(favoritesSet))
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_error) {
        throw new Error('Server has sent invalid data');
      }
    },

    unsetIsFavorite: async (id: number): Promise<void> => {
      const favoritesString = localStorage.getItem(FAVORITE_CHARACTERS_KEY);

      try {
        const favorites = JSON.parse(favoritesString ?? '[]');

        if (!isFavorites(favorites)) {
          throw new Error('Server has sent invalid data');
        }

        const favoritesSet = new Set(favorites);

        favoritesSet.delete(id);

        localStorage.setItem(
          FAVORITE_CHARACTERS_KEY,
          JSON.stringify(Array.from(favoritesSet))
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_error) {
        throw new Error('Server has sent invalid data');
      }
    },
  };
};
