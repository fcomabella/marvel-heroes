import { GetCharacterByIdFn } from '@core/characters/domain/ports/get-character-by-id-fn';
import { GetCharacterComicsFn } from '@core/characters/domain/ports/get-character-comics-fn';
import { GetFavoritesFn } from '@core/characters/domain/ports/get-favorites-fn';
import { SearchCharactersFn } from '@core/characters/domain/ports/search-characters-fn';
import { SetIsFavoriteFn } from '@core/characters/domain/ports/set-is-favorite-fn';

export type CharactersRepositoryResult = {
  searchCharacters: SearchCharactersFn;
  getCharacterById: GetCharacterByIdFn;
  getCharacterComics: GetCharacterComicsFn;
  getFavorites: GetFavoritesFn;
  setIsFavorite: SetIsFavoriteFn;
  unsetIsFavorite: SetIsFavoriteFn;
};
