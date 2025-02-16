import { GetCharacterResult } from '@core/characters/domain/ports/get-character-result';

export type GetCharacterByIdUseCaseResult = (
  id: string
) => Promise<GetCharacterResult>;
