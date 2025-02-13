import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';

const rootRoute = createRootRoute();
const router = createRouter({ routeTree: rootRoute });

export const renderWithRouter = (
  ui: ReactNode,
  options?: RenderOptions
): RenderResult => {
  return render(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <RouterProvider router={router as any} defaultComponent={() => ui} />,
    options
  );
};
