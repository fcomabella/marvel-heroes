import { z } from 'zod';

export const favoritesDtoSchema = z.array(
  z.object({
    id: z.number().positive(),
    name: z.string(),
    isFavorite: z.boolean(),
    thumbnail: z.string(),
  })
);

export type FavoritesDtoSchema = typeof favoritesDtoSchema;
export type FavoritesDto = z.infer<FavoritesDtoSchema>;
