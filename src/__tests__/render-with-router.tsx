import {
  renderWithQueryProvider,
  RenderWithQueryProviderOptions,
} from '@__tests__/render-with-query-provider';
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import { RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';

const rootRoute = createRootRoute();

const charactersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'characters',
});

const charactersIndexRoute = createRoute({
  getParentRoute: () => charactersRoute,
  path: '/',
});

const characterRoute = createRoute({
  getParentRoute: () => charactersIndexRoute,
  path: '$characterId',
});

const routeTree = rootRoute.addChildren([
  charactersRoute.addChildren([charactersIndexRoute, characterRoute]),
]);

const router = createRouter({ routeTree });

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
