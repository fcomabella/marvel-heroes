import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
  QueryClientProviderProps,
} from '@tanstack/react-query';
import {
  renderHook,
  RenderHookOptions,
  RenderHookResult,
} from '@testing-library/react';
import { WithChildren } from '@ui/shared/models';
import { ReactNode } from 'react';

export interface RenderHookWithQueryProviderOptions<Props>
  extends RenderHookOptions<Props> {
  queryConfig?: QueryClientConfig;
}

const createQueryClientProvider =
  (props: QueryClientProviderProps) =>
  ({ children }: WithChildren): ReactNode => (
    <QueryClientProvider {...props}>{children}</QueryClientProvider>
  );

export const renderHookWithQueryProvider = <Result, Props>(
  render: (initialProps: Props) => Result,
  { queryConfig, ...options }: RenderHookWithQueryProviderOptions<Props> = {}
): RenderHookResult<Result, Props> => {
  const client = new QueryClient(queryConfig);

  return renderHook(render, {
    ...options,
    wrapper: createQueryClientProvider({ client }),
  });
};
