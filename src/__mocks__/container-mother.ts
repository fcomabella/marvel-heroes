import { Container } from '@core/shared/domain/models';
import { faker } from '@faker-js/faker';

export const ContainerMother = <T extends object>(
  ContainedMother: () => T
): Container<T> => ({
  count: faker.number.int(),
  limit: faker.number.int(),
  offset: faker.number.int(),
  total: faker.number.int(),
  results: [ContainedMother()],
});
