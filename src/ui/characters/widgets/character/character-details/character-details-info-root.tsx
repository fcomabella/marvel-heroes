import styled from '@emotion/styled';

export const CharacterDetailsInfoRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.sizing(3),
  paddingTop: theme.sizing(6),
  paddingBottom: theme.sizing(6),
  paddingLeft: theme.sizing(6),
  flexGrow: 1,

  [theme.mediaQueries.down('tablet')]: {
    paddingLeft: 0,
  },
}));
