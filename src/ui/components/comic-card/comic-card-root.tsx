import styled from '@emotion/styled';

export const ComicCardRoot = styled('div')({
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '180px',
  paddingBottom: '24px',
  '& img': {
    width: '100%',
    objectFit: 'cover',
  },
});
