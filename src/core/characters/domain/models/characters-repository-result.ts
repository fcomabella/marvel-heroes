import { GetCharacterByIdFn } from '@core/characters/domain/models/get-character-by-id-fn';
import { GetCharacterComicsFn } from '@core/characters/domain/models/get-character-comics-fn';
import { SearchCharactersFn } from '@core/characters/domain/models/search-characters-fn';

export type CharactersRepositoryResult = {
  searchCharacters: SearchCharactersFn;
  getCharacterById: GetCharacterByIdFn;
  getCharacterComics: GetCharacterComicsFn;
};
