import { useCharacterContext } from '@ui/characters/contexts/character';
import { CharacterDetailsImageContainer } from '@ui/characters/widgets/character/character-details/character-details-image-container';
import { ReactNode } from 'react';

export const CharacterDetailsImage = (): ReactNode => {
  const {
    character: { thumbnail, name },
  } = useCharacterContext();

  return (
    <CharacterDetailsImageContainer>
      <img
        src={thumbnail}
        loading="lazy"
        decoding="async"
        alt={name}
        aria-label={name}
      />
    </CharacterDetailsImageContainer>
  );
};
