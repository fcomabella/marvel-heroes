import { Wrapper } from '@core/shared/domain/models';
import { isWrapper } from '@core/shared/infrastructure/type-guards';
import { z } from 'zod';

export const unWrap = <
  T extends object,
  TWrapper extends Wrapper<T> = Wrapper<T>,
  Schema extends z.ZodObject<z.ZodRawShape> = z.ZodObject<z.ZodRawShape>,
>(
  dto: unknown,
  schema: Schema
): TWrapper['data'] => {
  if (isWrapper<T>(dto, schema)) {
    return dto.data;
  }

  throw new Error('Server has sent invalid data');
};
