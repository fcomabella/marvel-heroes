import { faker } from '@faker-js/faker';
import { ComicDetails } from '@ui/characters/models/comic-details';

export const ComicDetailsMother = (): ComicDetails => ({
  id: faker.number.int(),
  thumbnail: faker.internet.url(),
  title: faker.book.title(),
  year: faker.date.birthdate().getFullYear().toString(),
});
