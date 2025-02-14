import { summaryItemDtoSchema } from '@core/shared/infrastructure/schemas/summary-item-dto-schema';
import { z } from 'zod';

export const resourceListDtoSchema = z.object({
  available: z.number().nonnegative(),
  returned: z.number().nonnegative(),
  collectionURI: z.string().url(),
  items: z.array(summaryItemDtoSchema),
});
