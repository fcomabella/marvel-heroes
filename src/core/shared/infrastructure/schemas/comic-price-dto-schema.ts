import { z } from 'zod';

export const comicPriceDtoSchema = z.object({
  type: z.string(),
  price: z.number(),
});
