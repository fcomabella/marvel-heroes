import { Global } from '@emotion/react';
import { ReactNode } from 'react';

export const CssReset = (): ReactNode => (
  <Global
    styles={(theme) => ({
      ':root': {
        fontFamily: '"Roboto", sans-serif',
        lineHeight: 1.5,
        fontSynthesis: 'none',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },

      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },

      '*': {
        margin: 0,
      },
      body: {
        lineHeight: 1.5,
        backgroundColor: theme.colors.light,
      },

      'img, picture, video, canvas, svg': {
        display: 'block',
        maxWidth: '100%',
      },

      'input,button,textarea,select': {
        font: 'inherit',
      },

      'p, h1, h2, h3, h4, h5, h6': {
        overflowWrap: 'break-word',
      },

      p: {
        textWrap: 'pretty',
      },

      a: {
        color: theme.typography.color.inverted,
        textDecoration: 'none',
      },

      'h1, h2, h3, h4, h5, h6': {
        textWrap: 'balance',
        fontWeight: 'bold',
      },
    })}
  />
);
