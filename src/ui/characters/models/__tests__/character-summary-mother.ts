import { faker } from '@faker-js/faker';
import { CharacterSummary } from '@ui/characters/models/character-summary';

export const CharacterSummaryMother = (): CharacterSummary => ({
  id: faker.number.int(),
  isFavorite: faker.datatype.boolean(),
  name: faker.person.fullName(),
  thumbnail: faker.internet.url(),
});
