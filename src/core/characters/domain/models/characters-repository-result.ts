import { GetCharacterByIdFn } from '@core/characters/domain/models/get-character-by-id-fn';
import { SearchCharactersFn } from '@core/characters/domain/models/search-characters-fn';

export type CharactersRepositoryResult = {
  searchCharacters: SearchCharactersFn;
  getCharacterById: GetCharacterByIdFn;
};
