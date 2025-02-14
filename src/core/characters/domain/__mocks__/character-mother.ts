import { Character } from '@core/characters/domain/models';
import { faker } from '@faker-js/faker';
import { ResourceListMother } from 'src/__mocks__/resource-list-mother';
import { ThumbnailMother } from 'src/__mocks__/thumbnail-mother';
import { UrlMother } from 'src/__mocks__/url-mother';

export const CharacterMother = (): Character => ({
  comics: ResourceListMother(),
  description: faker.person.bio(),
  events: ResourceListMother(),
  id: faker.number.int(),
  modified: faker.date.birthdate().toISOString(),
  name: faker.person.fullName(),
  resourceURI: faker.internet.url(),
  series: ResourceListMother(),
  stories: ResourceListMother(),
  thumbnail: ThumbnailMother(),
  urls: [UrlMother()],
});
