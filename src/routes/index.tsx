import { createFileRoute } from '@tanstack/react-router';
import { CharactersProvider } from '@ui/characters/contexts/characters';
import { CharacterList } from '@ui/characters/widgets/character-list';
import { CharacterSearch } from '@ui/characters/widgets/character-search';
import { ReactNode } from 'react';
import { zodValidator } from '@tanstack/zod-adapter';
import { z } from 'zod';
import { Header } from '@ui/characters/widgets/header';

const characterSearchSchema = z.object({
  search: z.string().optional(),
});

type CharacterSearch = z.infer<typeof characterSearchSchema>;

const Index = (): ReactNode => (
  <CharactersProvider Header={Header} SearchBar={<CharacterSearch />}>
    <CharacterList />
  </CharactersProvider>
);

export const Route = createFileRoute('/')({
  component: Index,
  validateSearch: zodValidator(characterSearchSchema),
});
