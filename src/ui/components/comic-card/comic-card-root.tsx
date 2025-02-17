import styled from '@emotion/styled';

export const ComicCardRoot = styled('div')(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.sizing(0.75),
  width: theme.sizing(22.5),
  paddingBottom: theme.sizing(1.5),
  '& img': {
    width: '100%',
    objectFit: 'cover',
  },
}));
