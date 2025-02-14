import { Wrapper } from '@core/shared/infrastructure/models';
import { getWrapperDtoSchema } from '@core/shared/infrastructure/schemas';
import { z } from 'zod';

export const isWrapper = <
  T extends object,
  Schema extends z.ZodObject<z.ZodRawShape>,
>(
  dto: unknown,
  schema: Schema
): dto is Wrapper<T> => {
  const { success, error } = getWrapperDtoSchema(schema).safeParse(dto);

  if (!success) {
    throw error;
  }

  return success;
};
