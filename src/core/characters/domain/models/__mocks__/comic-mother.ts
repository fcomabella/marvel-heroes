import { ResourceListMother } from '@__mocks__/resource-list-mother';
import { SummaryItemMother } from '@__mocks__/summary-item-mother';
import { UrlMother } from '@__mocks__/url-mother';
import { Comic } from '@core/characters/domain/models';
import { ComicDateMother } from '@core/shared/domain/models/__mocks__/comic-date-mother';
import { ComicPriceMother } from '@core/shared/domain/models/__mocks__/comic-price-mother';
import { ImageMother } from '@core/shared/domain/models/__mocks__/image-mother';
import { TextObjectMother } from '@core/shared/domain/models/__mocks__/text-object-mother';
import { faker } from '@faker-js/faker';

export const ComicMother = (): Comic => ({
  characters: ResourceListMother(),
  collectedIssues: [SummaryItemMother()],
  collections: [SummaryItemMother()],
  creators: ResourceListMother(),
  dates: [ComicDateMother()],
  description: faker.lorem.paragraph(),
  diamondCode: faker.string.alphanumeric(),
  digitalId: faker.number.int(),
  ean: faker.string.numeric(),
  events: ResourceListMother(),
  format: faker.book.format(),
  id: faker.number.int(),
  images: [ImageMother()],
  isbn: faker.string.numeric(),
  issn: faker.string.numeric(),
  issueNumber: faker.number.int(),
  modified: faker.date.recent().toISOString(),
  pageCount: faker.number.int({ min: 0, max: 50 }),
  prices: [ComicPriceMother()],
  resourceURI: faker.internet.url(),
  series: SummaryItemMother(),
  stories: ResourceListMother(),
  textObjects: [TextObjectMother()],
  thumbnail: ImageMother(),
  title: faker.book.title(),
  upc: faker.string.numeric(),
  urls: [UrlMother()],
  variantDescription: faker.book.format(),
  variants: [SummaryItemMother()],
});
