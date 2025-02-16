import {
  comicDateDtoSchema,
  comicPriceDtoSchema,
  imageDtoSchema,
  resourceListDtoSchema,
  summaryItemDtoSchema,
  textObjectDtoSchema,
  urlDtoSchema,
} from '@core/shared/infrastructure/schemas';
import { z } from 'zod';

export const comicDtoSchema = z.object({
  id: z.number().positive(),
  digitalId: z.number().nonnegative(),
  title: z.string(),
  issueNumber: z.number().nonnegative(),
  variantDescription: z.string(),
  description: z.string().nullable(),
  modified: z.string(),
  isbn: z.string(),
  upc: z.string(),
  diamondCode: z.string(),
  ean: z.string(),
  issn: z.string(),
  format: z.string(),
  pageCount: z.number().nonnegative(),
  textObjects: z.array(textObjectDtoSchema),
  resourceURI: z.string().url(),
  urls: z.array(urlDtoSchema),
  series: summaryItemDtoSchema,
  variants: z.array(summaryItemDtoSchema),
  collections: z.array(summaryItemDtoSchema),
  collectedIssues: z.array(summaryItemDtoSchema),
  dates: z.array(comicDateDtoSchema),
  prices: z.array(comicPriceDtoSchema),
  thumbnail: imageDtoSchema,
  images: z.array(imageDtoSchema),
  creators: resourceListDtoSchema,
  characters: resourceListDtoSchema,
  stories: resourceListDtoSchema,
  events: resourceListDtoSchema,
});

export type ComicDtoSchema = typeof comicDtoSchema;
export type ComicDto = z.infer<ComicDtoSchema>;
