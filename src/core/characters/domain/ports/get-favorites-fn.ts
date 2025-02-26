import { CharacterSummary } from '@core/characters/domain/models';

export type GetFavoritesFn = () => Promise<Array<CharacterSummary>>;
