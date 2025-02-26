import { favoritesDtoSchema } from '@core/characters/infrastructure/schemas/favorites-dto-schema';
import { CharacterSummary } from '@ui/characters/models';

export const isFavorites = (dto: unknown): dto is Array<CharacterSummary> => {
  const { success } = favoritesDtoSchema.safeParse(dto);

  return success;
};
