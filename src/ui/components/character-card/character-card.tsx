import { ReactNode } from '@tanstack/react-router';
import { CharacterCardRoot } from './character-card-root';
import { CharacterCardImage } from './character-card-image';
import { CharacterCardHeroName } from './character-card-hero-name';
import { CharacterCardIsFavorite } from './character-card-is-favorite';
import { CharacterCardProps } from './character-card-props';

export const CharacterCard = ({
  name,
  image,
  isFavorite = false,
}: CharacterCardProps): ReactNode => (
  <CharacterCardRoot>
    <CharacterCardImage src={image} />
    <CharacterCardHeroName>{name}</CharacterCardHeroName>
    <CharacterCardIsFavorite isFavorite={isFavorite} />
  </CharacterCardRoot>
);
