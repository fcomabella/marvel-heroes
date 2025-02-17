import { z } from 'zod';

export const favoritesDtoSchema = z.array(z.number().positive());

export type FavoritesDtoSchema = typeof favoritesDtoSchema;
export type FavoritesDto = z.infer<FavoritesDtoSchema>;
