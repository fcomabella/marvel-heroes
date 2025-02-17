import { createFileRoute } from '@tanstack/react-router';
import { FavoritesProvider } from '@ui/characters/contexts/favorites/favorites-provider';
import { CharacterSearch } from '@ui/characters/widgets/character-search';
import { FavoritesList } from '@ui/characters/widgets/favorites-list';
import { Header } from '@ui/characters/widgets/header';
import { ReactNode } from 'react';

const Favorites = (): ReactNode => (
  <FavoritesProvider
    SearchBar={<CharacterSearch to="/favorites" />}
    Header={Header}
  >
    <FavoritesList />
  </FavoritesProvider>
);

export const Route = createFileRoute('/favorites')({
  component: Favorites,
});
