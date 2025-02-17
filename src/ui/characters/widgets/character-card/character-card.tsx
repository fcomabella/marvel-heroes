import { Link, ReactNode } from '@tanstack/react-router';
import { CharacterCardRoot } from './character-card-root';
import { CharacterCardImage } from './character-card-image';
import { CharacterCardName } from './character-card-name';
import { CharacterIsFavorite } from '../character-is-favorite/character-is-favorite';
import { CharacterCardProps } from './character-card-props';

export const CharacterCard = ({ character }: CharacterCardProps): ReactNode => {
  const { name, id } = character;
  return (
    <CharacterCardRoot>
      <CharacterCardImage character={character} />
      <CharacterCardName>
        <Link
          to="/characters/$characterId"
          params={{ characterId: id.toString() }}
        >
          {name}
        </Link>
      </CharacterCardName>
      <CharacterIsFavorite character={character} />
    </CharacterCardRoot>
  );
};
