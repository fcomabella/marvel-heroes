import { GetCharacterComicsResult } from '@core/characters/domain/ports/get-character-comics-result';

export type GetCharacterComicsFn = (id: string) => GetCharacterComicsResult;
