import { GetCharacterResult } from '@core/characters/domain/models/get-character-result';

export type GetCharacterByIdUseCaseResult = (
  id: string
) => Promise<GetCharacterResult>;
