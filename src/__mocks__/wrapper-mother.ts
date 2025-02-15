import { Wrapper } from '@core/shared/domain/models';
import { faker } from '@faker-js/faker';
import { ContainerMother } from '@__mocks__/container-mother';

export const WrapperMother = <T extends object>(
  ContainedMother: () => T
): Wrapper<T> => ({
  attributionHTML: faker.lorem.lines(),
  attributionText: faker.lorem.lines(),
  code: 200,
  copyright: faker.company.buzzPhrase(),
  data: ContainerMother(ContainedMother),
  status: faker.string.alpha(),
  etag: faker.string.hexadecimal({
    casing: 'lower',
    length: 20,
    prefix: '',
  }),
});
