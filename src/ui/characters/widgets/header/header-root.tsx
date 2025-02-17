import styled from '@emotion/styled';
import { HeaderRootProps } from './header-root-props';

export const HeaderRoot = styled('header')<HeaderRootProps>(
  ({ isLoading = false }) => ({
    padding: '16px',
    background: `
      linear-gradient(
      #ff0000 0%,
      #ff0000 100%
      ),
      linear-gradient(
      #000000 0%,
      #000000 100%
      )
    `,
    backgroundSize: isLoading ? 'auto 6px, cover' : 'auto 0, cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  })
);
