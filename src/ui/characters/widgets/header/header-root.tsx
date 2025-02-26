import styled from '@emotion/styled';
import { HeaderRootProps } from './header-root-props';
import { keyframes } from '@emotion/react';

const animation = keyframes({
  '0%': {
    backgroundPosition: 'bottom left, top',
  },
  '50%': {
    backgroundPosition: 'bottom right, top',
  },
  '100%': {
    backgroundPosition: 'bottom left, top',
  },
});

export const HeaderRoot = styled('header')<HeaderRootProps>(
  ({ theme, isLoading = false }) => ({
    padding: theme.sizing(2),
    background: `
      linear-gradient(
        90deg,
        ${theme.colors.dark} 0%,
        ${theme.colors.marvelRed} 40%,
        ${theme.colors.marvelRed} 60%,
        ${theme.colors.dark} 100%
      ),
      linear-gradient(
        ${theme.colors.dark} 0%,
        ${theme.colors.dark} 100%
      )
    `,
    backgroundSize: isLoading
      ? `400% ${theme.sizing(0.75)}, cover`
      : 'auto 0, cover',
    animation: isLoading ? `${animation} 3s ease infinite` : 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom, top',
    color: theme.typography.color.inverted,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  })
);
