import { css, Global } from '@emotion/react';
import { ReactNode } from '@tanstack/react-router';
import emotionReset from 'emotion-reset';

export const CssReset = (): ReactNode => (
  <Global
    styles={css`
      ${emotionReset}

      *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }

      :root {
        font-family: 'Roboto Condensed', sans-serif;
      }
    `}
  />
);
