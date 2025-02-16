import { GetCharacterControllerResponse } from '@ui/characters/models/get-character-controller-response';

export type GetCharacterControllerResult = (
  id: string
) => Promise<GetCharacterControllerResponse>;
