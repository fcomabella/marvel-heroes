import { useCharacterContext } from '@ui/characters/contexts/character';
import { CharacterDetailsName } from './character-details-name';
import { CharacterDetailsInfoRoot } from './character-details-info-root';
import { CharacterDetailsDescription } from './character-details-description';
import { ReactNode } from 'react';
import { CharacterDetailsHeader } from '@ui/characters/widgets/character/character-details/character-details-header';
import { CharacterIsFavorite } from '@ui/characters/widgets/character-is-favorite';

export const CharacterDetailsInfo = (): ReactNode => {
  const { character } = useCharacterContext();
  const { name, description } = character;
  return (
    <CharacterDetailsInfoRoot>
      <CharacterDetailsHeader>
        <CharacterDetailsName>{name}</CharacterDetailsName>
        <CharacterIsFavorite character={character} />
      </CharacterDetailsHeader>
      <CharacterDetailsDescription>{description}</CharacterDetailsDescription>
    </CharacterDetailsInfoRoot>
  );
};
