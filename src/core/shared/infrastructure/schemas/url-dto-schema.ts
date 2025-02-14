import { z } from 'zod';

export const urlDtoSchema = z.object({
  type: z.string(),
  url: z.string().url(),
});
