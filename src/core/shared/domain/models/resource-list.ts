import { SummaryItem } from '@core/shared/domain/models/summary-item';

export interface ResourceList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<SummaryItem>;
}
