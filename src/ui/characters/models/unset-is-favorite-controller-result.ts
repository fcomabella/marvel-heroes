import { CharacterSummary } from '@ui/characters/models/character-summary';

export type UnsetIsFavoriteControllerResult = (
  character: CharacterSummary
) => Promise<void>;
