import styled from '@emotion/styled';

export const CharactersProviderRoot = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.sizing(3),
  padding: theme.sizing(6),

  [theme.mediaQueries.down('mobile')]: {
    padding: theme.sizing(2),
  },
}));
