import { z } from 'zod';

export type GetContainerDtoSchemaResult<
  Schema extends z.ZodObject<z.ZodRawShape>,
> = z.ZodObject<{
  offset: z.ZodNumber;
  limit: z.ZodNumber;
  total: z.ZodNumber;
  count: z.ZodNumber;
  results: z.ZodArray<Schema, z.ArrayCardinality>;
}>;

export const getContainerDtoSchema = <
  Schema extends z.ZodObject<z.ZodRawShape>,
>(
  schema: Schema
): GetContainerDtoSchemaResult<Schema> =>
  z.object({
    offset: z.number().finite().nonnegative(),
    limit: z.number().finite().positive(),
    total: z.number().finite().positive(),
    count: z.number().finite().positive(),
    results: z.array(schema),
  });
