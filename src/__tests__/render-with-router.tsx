import {
  renderWithQueryProvider,
  RenderWithQueryProviderOptions,
} from '@__tests__/render-with-query-provider';
import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import { RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';

const rootRoute = createRootRoute();
const router = createRouter({ routeTree: rootRoute });

export const renderWithRouter = (
  ui: ReactNode,
  options?: RenderWithQueryProviderOptions
): RenderResult => {
  return renderWithQueryProvider(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <RouterProvider router={router as any} defaultComponent={() => ui} />,
    options
  );
};
