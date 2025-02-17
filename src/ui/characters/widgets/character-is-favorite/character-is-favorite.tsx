import { useToggleIsFavorite } from '@ui/characters/hooks';
import { CharacterSummary } from '@ui/characters/models';
import { CharacterIsFavoriteRoot } from '@ui/characters/widgets/character-is-favorite/character-is-favorite-root';
import { HeartIcon } from '@ui/components/heart-icon';
import { IconButton } from '@ui/components/icon-button/icon-button';
import { ReactNode } from 'react';

export const CharacterIsFavorite = ({
  character,
}: {
  character: CharacterSummary;
}): ReactNode => {
  const toggleIsFavorite = useToggleIsFavorite();

  const favoriteButtonOnClick = (): void => {
    toggleIsFavorite(character);
  };

  return (
    <CharacterIsFavoriteRoot>
      <IconButton
        onClick={favoriteButtonOnClick}
        aria-label={
          character.isFavorite ? 'Remove from favorites' : 'Add to favorites'
        }
      >
        <HeartIcon unselected={!character.isFavorite} />
      </IconButton>
    </CharacterIsFavoriteRoot>
  );
};
