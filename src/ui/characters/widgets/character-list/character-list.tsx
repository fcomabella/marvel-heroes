import { ReactNode } from '@tanstack/react-router';
import { useCharactersContext } from '@ui/characters/contexts/characters';
import { CharacterListContainer } from '@ui/characters/widgets/character-list/character-list-container';
import { CharacterCard } from '@ui/components/character-card';

export const CharacterList = (): ReactNode => {
  const { results, characters } = useCharactersContext();

  return (
    <>
      <p data-testid="results-paragraph">{results} RESULTS</p>
      <CharacterListContainer>
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </CharacterListContainer>
    </>
  );
};
