import { CharacterSummary } from '@ui/characters/models/character-summary';

export type SetIsFavoriteControllerResult = (
  character: CharacterSummary
) => Promise<void>;
