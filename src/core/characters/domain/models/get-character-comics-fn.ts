import { GetCharacterComicsResult } from '@core/characters/domain/models/get-character-comics-result';

export type GetCharacterComicsFn = (id: string) => GetCharacterComicsResult;
