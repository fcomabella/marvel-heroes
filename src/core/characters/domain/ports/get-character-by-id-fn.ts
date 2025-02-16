import { SearchCharactersResult } from '@core/characters/domain/ports/search-characters-result';

export type GetCharacterByIdFn = (id: string) => SearchCharactersResult;
