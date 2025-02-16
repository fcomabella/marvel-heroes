import { ComicDate } from '@core/shared/domain/models/comic-date';
import { faker } from '@faker-js/faker';

export const ComicDateMother = (): ComicDate => ({
  date: faker.date.anytime().toISOString(),
  type: 'onsaleDate',
});
