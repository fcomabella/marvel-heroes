import {
  getContainerDtoSchema,
  GetContainerDtoSchemaResult,
} from '@core/shared/infrastructure/schemas/container-dto-schema';
import { z } from 'zod';

export type GetWrapperDtoSchemaResult<
  Schema extends z.ZodObject<z.ZodRawShape>,
> = z.ZodObject<{
  code: z.ZodNumber;
  status: z.ZodString;
  etag: z.ZodString;
  copyright: z.ZodString;
  attributionText: z.ZodString;
  attributionHTML: z.ZodString;
  data: GetContainerDtoSchemaResult<Schema>;
}>;

export const getWrapperDtoSchema = <Schema extends z.ZodObject<z.ZodRawShape>>(
  schema: Schema
): GetWrapperDtoSchemaResult<Schema> =>
  z.object({
    code: z.number().positive().gte(200).lt(600),
    status: z.string(),
    etag: z.string(),
    copyright: z.string(),
    attributionText: z.string(),
    attributionHTML: z.string(),
    data: getContainerDtoSchema(schema),
  });
