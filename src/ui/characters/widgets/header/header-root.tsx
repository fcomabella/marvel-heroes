import styled from '@emotion/styled';
import { HeaderRootProps } from './header-root-props';

export const HeaderRoot = styled('header')<HeaderRootProps>(
  ({ theme, isLoading = false }) => ({
    padding: theme.sizing(2),
    background: `
      linear-gradient(
        ${theme.colors.marvelRed} 0%,
        ${theme.colors.marvelRed} 100%
      ),
      linear-gradient(
        ${theme.colors.dark} 0%,
        ${theme.colors.dark} 100%
      )
    `,
    backgroundSize: isLoading
      ? `auto ${theme.sizing(0.75)}, cover`
      : 'auto 0, cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    color: theme.typography.color.inverted,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  })
);
