import { RenderWithQueryProviderOptions } from '@__tests__/render-with-query-provider';
import { renderWithRouter } from '@__tests__/render-with-router';
import { RenderResult } from '@testing-library/react';
import { CharacterProvider } from '@ui/characters/contexts/character';
import { ReactNode } from 'react';

export const renderWithCharacterProvider = (
  ui: ReactNode,
  options?: RenderWithQueryProviderOptions
): RenderResult => {
  return renderWithRouter(<CharacterProvider>{ui}</CharacterProvider>, options);
};
