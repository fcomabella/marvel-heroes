import { SummaryItem } from '@core/shared/domain/models';
import { faker } from '@faker-js/faker';

export const SummaryItemMother = (): SummaryItem => ({
  name: faker.person.fullName(),
  resourceURI: faker.internet.url(),
});
