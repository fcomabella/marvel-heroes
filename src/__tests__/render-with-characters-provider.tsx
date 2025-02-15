import { RenderWithQueryProviderOptions } from '@__tests__/render-with-query-provider';
import { renderWithRouter } from '@__tests__/render-with-router';
import { RenderResult } from '@testing-library/react';
import { CharactersProvider } from '@ui/characters/contexts/characters';
import { ReactNode } from 'react';

export const renderWithCharactersProvider = (
  ui: ReactNode,
  options?: RenderWithQueryProviderOptions
): RenderResult => {
  return renderWithRouter(
    <CharactersProvider>{ui}</CharactersProvider>,
    options
  );
};
