import styled from '@emotion/styled';

export const CharacterDetailsImageContainer = styled('div')(({ theme }) => ({
  flexShrink: 0,
  flexBasis: theme.sizing(40),
  height: theme.sizing(40),
  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    contentVisibility: 'auto',
  },
}));
