import { Image } from '@core/shared/domain/models/image';
import { faker } from '@faker-js/faker';

export const ImageMother = (): Image => ({
  extension: faker.system.commonFileExt(),
  path: faker.internet.url(),
});
