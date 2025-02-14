import { z } from 'zod';

export const imageDtoSchema = z.object({
  path: z.string().url(),
  extension: z.string(),
});
