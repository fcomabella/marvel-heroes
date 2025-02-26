import { CharacterSummary } from '@core/characters/domain/models';
import { isFavorites } from '@core/characters/infrastructure/type-guards/is-favorites';

export const parseFavorites = (
  toParse: string | null
): Array<CharacterSummary> => {
  const favorites = JSON.parse(toParse ?? '[]');

  if (!isFavorites(favorites)) {
    throw new Error('Server has sent invalid data');
  }

  return favorites;
};
