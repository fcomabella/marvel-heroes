import { TextObject } from '@core/shared/domain/models/text-object';
import { faker } from '@faker-js/faker';

export const TextObjectMother = (): TextObject => ({
  language: faker.location.language().alpha2,
  text: faker.lorem.paragraph(),
  type: faker.string.sample(20),
});
