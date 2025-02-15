import { SearchCharactersResult } from '@core/characters/domain/models';

export type GetCharacterByIdUseCaseResult = (
  id: string
) => SearchCharactersResult;
