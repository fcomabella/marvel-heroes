import { Link, ReactNode } from '@tanstack/react-router';
import { CharacterCardRoot } from './character-card-root';
import { CharacterCardImage } from './character-card-image';
import { CharacterCardHeroName } from './character-card-hero-name';
import { CharacterCardIsFavorite } from './character-card-is-favorite';
import { CharacterCardProps } from './character-card-props';

export const CharacterCard = ({ character }: CharacterCardProps): ReactNode => {
  const { isFavorite, name, id } = character;
  return (
    <CharacterCardRoot>
      <CharacterCardImage character={character} />
      <CharacterCardHeroName>
        <Link
          to="/characters/$characterId"
          params={{ characterId: id.toString() }}
        >
          {name}
        </Link>
      </CharacterCardHeroName>
      <CharacterCardIsFavorite isFavorite={isFavorite} />
    </CharacterCardRoot>
  );
};
