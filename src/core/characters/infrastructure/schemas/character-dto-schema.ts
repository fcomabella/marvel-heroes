import {
  imageDtoSchema,
  urlDtoSchema,
} from '@core/shared/infrastructure/schemas';
import { resourceListDtoSchema } from '@core/shared/infrastructure/schemas/resource-list-dto-schema';
import { z } from 'zod';

export const characterDtoSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  description: z.string(),
  modified: z.string().datetime({ offset: true }),
  resourceURI: z.string().url(),
  urls: z.array(urlDtoSchema),
  thumbnail: imageDtoSchema,
  comics: resourceListDtoSchema,
  stories: resourceListDtoSchema,
  events: resourceListDtoSchema,
  series: resourceListDtoSchema,
});

export type CharacterDtoSchema = typeof characterDtoSchema;
export type CharacterDto = z.infer<CharacterDtoSchema>;
