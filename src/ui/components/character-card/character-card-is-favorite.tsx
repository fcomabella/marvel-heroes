import styled from '@emotion/styled';
import { HeartIcon } from '@ui/components/heart-icon';
import { ReactNode } from 'react';

const CharacterCardIsFavoriteContainer = styled('div')({
  gridRowStart: 2,
  gridColumnStart: 2,
  alignSelf: 'center',
  justifySelf: 'center',
});

export const CharacterCardIsFavorite = ({
  isFavorite = false,
}: {
  isFavorite?: boolean;
}): ReactNode => (
  <CharacterCardIsFavoriteContainer>
    <HeartIcon unselected={!isFavorite} />
  </CharacterCardIsFavoriteContainer>
);
