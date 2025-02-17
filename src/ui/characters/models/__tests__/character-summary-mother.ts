import { faker } from '@faker-js/faker';
import { CharacterSummary } from '@ui/characters/models/character-summary';

export const CharacterSummaryMother = ({
  isFavorite = faker.datatype.boolean(),
}: { isFavorite?: boolean } = {}): CharacterSummary => ({
  id: faker.number.int(),
  isFavorite,
  name: faker.person.fullName(),
  thumbnail: faker.internet.url(),
});
