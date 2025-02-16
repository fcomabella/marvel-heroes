import { CharacterDetails } from '@ui/characters/widgets/character/character-details';
import { Comics } from '@ui/characters/widgets/character/comics/comics';
import { ReactNode } from 'react';

export const Character = (): ReactNode => {
  return (
    <>
      <CharacterDetails />
      <Comics />
    </>
  );
};
