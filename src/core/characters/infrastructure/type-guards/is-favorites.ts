import { favoritesDtoSchema } from '@core/characters/infrastructure/schemas/favorites-dto-schema';

export const isFavorites = (dto: unknown): dto is Array<number> => {
  const { success } = favoritesDtoSchema.safeParse(dto);

  return success;
};
