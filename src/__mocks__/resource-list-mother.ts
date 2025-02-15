import { ResourceList } from '@core/shared/domain/models';
import { faker } from '@faker-js/faker';
import { SummaryItemMother } from '@__mocks__/summary-item-mother';

export const ResourceListMother = (): ResourceList => ({
  available: faker.number.int(),
  collectionURI: faker.internet.url(),
  items: [SummaryItemMother()],
  returned: faker.number.int({ max: 20 }),
});
