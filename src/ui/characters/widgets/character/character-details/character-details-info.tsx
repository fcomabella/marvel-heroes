import { useCharacterContext } from '@ui/characters/contexts/character';
import { CharacterDetailsName } from './character-details-name';
import { CharacterDetailsInfoRoot } from './character-details-info-root';
import { CharacterDetailsDescription } from './character-details-description';
import { ReactNode } from 'react';

export const CharacterDetailsInfo = (): ReactNode => {
  const {
    character: { name, description },
  } = useCharacterContext();

  return (
    <CharacterDetailsInfoRoot>
      <CharacterDetailsName>{name}</CharacterDetailsName>
      <CharacterDetailsDescription>{description}</CharacterDetailsDescription>
    </CharacterDetailsInfoRoot>
  );
};
