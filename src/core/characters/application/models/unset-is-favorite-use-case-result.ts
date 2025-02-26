import { CharacterSummary } from '@ui/characters/models';

export type UnsetIsFavoriteUseCaseResult = (
  character: CharacterSummary
) => Promise<void>;
