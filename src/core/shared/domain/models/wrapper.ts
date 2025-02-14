import { Container } from '@core/shared/domain/models/container';

export interface Wrapper<T extends object> {
  code: number;
  status: string;
  etag: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: Container<T>;
}
