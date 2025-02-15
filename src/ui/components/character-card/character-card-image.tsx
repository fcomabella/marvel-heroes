import styled from '@emotion/styled';
import { Link, ReactNode } from '@tanstack/react-router';
import { CharacterSummary } from '@ui/characters/models';

const CharacterCardImageContainer = styled('div')({
  gridColumnStart: 'span 2',
  gridRowStart: 1,
  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    contentVisibility: 'auto',
  },
});

export interface CharacterCardImageProps {
  character: CharacterSummary;
}

export const CharacterCardImage = ({
  character: { id, thumbnail },
}: CharacterCardImageProps): ReactNode => (
  <CharacterCardImageContainer>
    <Link to="/characters/$characterId" params={{ characterId: id.toString() }}>
      <img src={thumbnail} loading="lazy" decoding="async" />
    </Link>
  </CharacterCardImageContainer>
);
