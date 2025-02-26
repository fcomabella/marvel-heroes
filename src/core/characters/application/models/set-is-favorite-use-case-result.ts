import { CharacterSummary } from '@ui/characters/models';

export type SetIsFavoriteUseCaseResult = (
  character: CharacterSummary
) => Promise<void>;
