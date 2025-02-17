import { Theme } from '@emotion/react';
import { baseTheme } from './theme';
import { sizing } from './sizing';
import { up, down, between } from './media-queries';

export type BaseTheme = typeof baseTheme;

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {
    sizing: (...gridUnits: Array<number>) => string;
    mediaQueries: {
      up: (
        breakpoint: keyof BaseTheme['breakpoints'],
        theme: BaseTheme
      ) => string;
      down: (
        breakpoint: keyof BaseTheme['breakpoints'],
        theme: BaseTheme
      ) => string;
      between: (
        start: keyof BaseTheme['breakpoints'],
        end: keyof BaseTheme['breakpoints'],
        theme: BaseTheme
      ) => string;
    };
  }
}

export const theme: Theme = {
  ...baseTheme,
  sizing,
  mediaQueries: {
    up,
    down,
    between,
  },
};
