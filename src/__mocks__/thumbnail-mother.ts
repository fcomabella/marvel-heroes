import { Image } from '@core/shared/domain/models';
import { faker } from '@faker-js/faker';

export const ThumbnailMother = (): Image => ({
  extension: faker.system.commonFileExt(),
  path: faker.internet.url({ appendSlash: false }),
});
