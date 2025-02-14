import { createFileRoute } from '@tanstack/react-router';
import { CharactersProvider } from '@ui/characters/contexts/characters';
import { CharacterList } from '@ui/characters/widgets/character-list';
import { ReactNode } from 'react';

const Index = (): ReactNode => (
  <CharactersProvider>
    <CharacterList />
  </CharactersProvider>
);

export const Route = createFileRoute('/')({
  component: Index,
});
