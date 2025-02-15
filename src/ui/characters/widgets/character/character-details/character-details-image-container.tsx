import styled from '@emotion/styled';

export const CharacterDetailsImageContainer = styled('div')({
  flexShrink: 0,
  flexBasis: '320px',
  height: '320px',
  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    contentVisibility: 'auto',
  },
});
