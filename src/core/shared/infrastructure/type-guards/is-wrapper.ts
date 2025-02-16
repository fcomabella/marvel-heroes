import { Wrapper } from '@core/shared/domain/models';
import { getWrapperDtoSchema } from '@core/shared/infrastructure/schemas';
import { z } from 'zod';

export const isWrapper = <
  T extends object,
  Schema extends z.ZodObject<z.ZodRawShape> = z.ZodObject<z.ZodRawShape>,
>(
  dto: unknown,
  schema: Schema
): dto is Wrapper<T> => {
  const { success } = getWrapperDtoSchema(schema).safeParse(dto);

  return success;
};
