import { CharacterSummary } from '@core/characters/domain/models';

export type UnSetIsFavoriteFn = (character: CharacterSummary) => Promise<void>;
