import { CharacterSummary } from '@core/characters/domain/models';

export type SetIsFavoriteFn = (character: CharacterSummary) => Promise<void>;
