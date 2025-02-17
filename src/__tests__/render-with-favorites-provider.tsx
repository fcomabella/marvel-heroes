import { RenderWithQueryProviderOptions } from '@__tests__/render-with-query-provider';
import { renderWithRouter } from '@__tests__/render-with-router';
import { RenderResult } from '@testing-library/react';
import { FavoritesProvider } from '@ui/characters/contexts/favorites';
import { ReactNode } from 'react';

export const renderWithFavoritesProvider = (
  ui: ReactNode,
  options?: RenderWithQueryProviderOptions
): RenderResult => {
  return renderWithRouter(<FavoritesProvider>{ui}</FavoritesProvider>, options);
};
