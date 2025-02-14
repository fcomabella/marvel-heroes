import { SummaryItemDto } from '@core/shared/infrastructure/models/summary-item-dto';

export interface ResourceListDto {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<SummaryItemDto>;
}
