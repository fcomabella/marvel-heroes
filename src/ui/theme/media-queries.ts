import { baseTheme } from './theme';

export const up = (
  breakpoint: keyof typeof baseTheme.breakpoints,
  theme = baseTheme
): string =>
  `@media only screeen and (min-width: ${theme.breakpoints[breakpoint]}px)`;

export const down = (
  breakpoint: keyof typeof baseTheme.breakpoints,
  theme = baseTheme
): string =>
  `@media only screeen and (max-width: ${theme.breakpoints[breakpoint]}px)`;

export const between = (
  start: keyof typeof baseTheme.breakpoints,
  end: keyof typeof baseTheme.breakpoints,
  theme = baseTheme
): string => {
  const startWidth = theme.breakpoints[start];
  const endWidth = theme.breakpoints[end];

  if (endWidth <= startWidth) {
    throw new Error('End breakpoint must be greater than start breakpoint');
  }

  // eslint-disable-next-line @stylistic/max-len
  return `@media only screen and (min-width: ${startWidth}px) and (max-width: ${endWidth}px)`;
};
