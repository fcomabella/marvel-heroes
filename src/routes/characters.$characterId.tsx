import { createFileRoute } from '@tanstack/react-router';
import { CharacterProvider } from '@ui/characters/contexts/character';
import { Character } from '@ui/characters/widgets/character';
import { Header } from '@ui/characters/widgets/header';
import { ReactNode } from 'react';

export const Route = createFileRoute('/characters/$characterId')({
  component: RouteComponent,
});

function RouteComponent(): ReactNode {
  return (
    <CharacterProvider Header={Header}>
      <Character />
    </CharacterProvider>
  );
}
