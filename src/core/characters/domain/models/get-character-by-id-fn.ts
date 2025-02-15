import { SearchCharactersResult } from '@core/characters/domain/models/search-characters-result';

export type GetCharacterByIdFn = (id: string) => SearchCharactersResult;
