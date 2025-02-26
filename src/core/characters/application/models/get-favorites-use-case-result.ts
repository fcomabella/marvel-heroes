import { CharacterSummary } from '@core/characters/domain/models';

export type GetFavoritesUseCaseResult = () => Promise<Array<CharacterSummary>>;
