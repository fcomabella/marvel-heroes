import { useFavoritesContext } from '@ui/characters/contexts/favorites';
import { CharacterCard } from '@ui/components/character-card';
import { FavoritesListContainer } from './favorites-list-container';
import { ReactNode } from 'react';

export const FavoritesList = (): ReactNode => {
  const { results, characters } = useFavoritesContext();

  return (
    <>
      <p data-testid="results-paragraph">{results} RESULTS</p>
      <FavoritesListContainer>
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </FavoritesListContainer>
    </>
  );
};
