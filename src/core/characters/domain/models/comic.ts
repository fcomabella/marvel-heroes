import {
  ComicDate,
  ComicPrice,
  Image,
  ResourceList,
  SummaryItem,
  TextObject,
  URL,
} from '@core/shared/domain/models';

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: Array<TextObject>;
  resourceURI: string;
  urls: Array<URL>;
  series: SummaryItem;
  variants: Array<SummaryItem>;
  collections: Array<SummaryItem>;
  collectedIssues: Array<SummaryItem>;
  dates: Array<ComicDate>;
  prices: Array<ComicPrice>;
  thumbnail: Image;
  images: Array<Image>;
  creators: ResourceList;
  characters: ResourceList;
  stories: ResourceList;
  events: ResourceList;
}
