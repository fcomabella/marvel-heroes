import { CharacterDetailsContainer } from './character-details-container';
import { CharacterDetailsImage } from './character-details-image';
import { CharacterDetailsInfo } from './character-details-info';
import { CharacterDetailsRoot } from './character-details-root';
import { ReactNode } from 'react';

export const CharacterDetails = (): ReactNode => (
  <CharacterDetailsRoot>
    <CharacterDetailsContainer>
      <CharacterDetailsImage />
      <CharacterDetailsInfo />
    </CharacterDetailsContainer>
  </CharacterDetailsRoot>
);
