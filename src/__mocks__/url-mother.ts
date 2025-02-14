import { URL } from '@core/shared/domain/models';
import { faker } from '@faker-js/faker';

export const UrlMother = (): URL => ({
  type: faker.system.fileType(),
  url: faker.internet.url(),
});
