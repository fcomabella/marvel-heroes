import styled from '@emotion/styled';

export const CharacterDetailsContainer = styled('div')(({ theme }) => ({
  maxWidth: theme.sizing(120),
  display: 'flex',
  alignItems: 'center',
  paddingLeft: theme.sizing(6),
  paddingRight: theme.sizing(6),

  [theme.mediaQueries.down('tablet')]: {
    flexDirection: 'column',
    paddingLeft: 0,
    paddingRight: 0,
  },
}));
