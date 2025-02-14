import { z } from 'zod';

export const summaryItemDtoSchema = z.object({
  resourceURI: z.string().url(),
  name: z.string(),
});
