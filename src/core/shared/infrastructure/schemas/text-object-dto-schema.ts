import { z } from 'zod';

export const textObjectDtoSchema = z.object({
  type: z.string(),
  language: z.string(),
  text: z.string(),
});
