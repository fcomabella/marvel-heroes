import { GetCharacterByIdFn } from '@core/characters/domain/ports/get-character-by-id-fn';
import { GetCharacterComicsFn } from '@core/characters/domain/ports/get-character-comics-fn';
import { SearchCharactersFn } from '@core/characters/domain/ports/search-characters-fn';

export type CharactersRepositoryResult = {
  searchCharacters: SearchCharactersFn;
  getCharacterById: GetCharacterByIdFn;
  getCharacterComics: GetCharacterComicsFn;
};
