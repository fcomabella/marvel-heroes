import { faker } from '@faker-js/faker';
import { CharacterDetails } from '@ui/characters/models/character-details';

export const CharacterDetailsMother = (): CharacterDetails => ({
  description: faker.person.bio(),
  id: faker.number.int(),
  name: faker.person.fullName(),
  thumbnail: faker.internet.url(),
});
