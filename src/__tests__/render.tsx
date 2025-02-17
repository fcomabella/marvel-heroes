import { ThemeProvider } from '@emotion/react';
import {
  RenderOptions,
  RenderResult,
  render as baseRender,
} from '@testing-library/react';
import { theme } from '@ui/theme';
import { ReactNode } from 'react';

export const render = (
  ui: ReactNode,
  options?: RenderOptions
): RenderResult => {
  return baseRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
};
