export interface Container<T extends object> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<T>;
}
