import styled from '@emotion/styled';

export const ComicsList = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.sizing(2),
  overflowX: 'auto',
  '&::-webkit-scrollbar': {
    height: theme.sizing(0.5),
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.colors.marvelRed,
  },
  '&::-webkit-scrollbar-track': {
    background: theme.colors.scrollBg,
  },
}));
