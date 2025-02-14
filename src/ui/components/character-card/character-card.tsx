import { ReactNode } from '@tanstack/react-router';
import { CharacterCardRoot } from './character-card-root';
import { CharacterCardImage } from './character-card-image';
import { CharacterCardHeroName } from './character-card-hero-name';
import { CharacterCardIsFavorite } from './character-card-is-favorite';
import { CharacterCardProps } from './character-card-props';

export const CharacterCard = ({
  character: { isFavorite, name, thumbnail },
}: CharacterCardProps): ReactNode => {
  return (
    <CharacterCardRoot>
      <CharacterCardImage src={thumbnail} />
      <CharacterCardHeroName>{name}</CharacterCardHeroName>
      <CharacterCardIsFavorite isFavorite={isFavorite} />
    </CharacterCardRoot>
  );
};
