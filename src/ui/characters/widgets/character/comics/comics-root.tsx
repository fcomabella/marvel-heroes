import styled from '@emotion/styled';

export const ComicsRoot = styled('div')(({ theme }) => ({
  maxWidth: theme.sizing(120),
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.sizing(6),
  gap: theme.sizing(3),

  [theme.mediaQueries.down('mobile')]: {
    padding: theme.sizing(2),
  },
}));
