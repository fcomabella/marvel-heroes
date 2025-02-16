import styled from '@emotion/styled';

export const ComicsList = styled('div')({
  display: 'flex',
  gap: '16px',
  overflowX: 'auto',
  '&::-webkit-scrollbar': {
    height: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#EC1D24',
  },
  '&::-webkit-scrollbar-track': {
    background: '#D9D9D9',
  },
});
