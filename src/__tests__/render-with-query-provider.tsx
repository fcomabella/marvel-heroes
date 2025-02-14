import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';

export interface RenderWithQueryProviderOptions extends RenderOptions {
  queryConfig?: QueryClientConfig;
}

export const renderWithQueryProvider = (
  ui: ReactNode,
  { queryConfig, ...options }: RenderWithQueryProviderOptions = {}
): RenderResult => {
  const queryClient = new QueryClient(queryConfig);

  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
    options
  );
};
