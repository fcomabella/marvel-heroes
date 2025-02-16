import { z } from 'zod';

export const comicDateDtoSchema = z.object({
  type: z.string(),
  date: z.string(),
});
