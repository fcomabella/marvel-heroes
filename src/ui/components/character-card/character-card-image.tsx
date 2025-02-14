import styled from '@emotion/styled';
import { ReactNode } from '@tanstack/react-router';
import { HTMLProps } from 'react';

const CharacterCardImageContainer = styled('div')({
  gridColumnStart: 'span 2',
  gridRowStart: 1,
  '&>img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    contentVisibility: 'auto',
  },
});

export const CharacterCardImage = (
  props: HTMLProps<HTMLImageElement>
): ReactNode => (
  <CharacterCardImageContainer>
    <img {...props} loading="lazy" decoding="async" />
  </CharacterCardImageContainer>
);
