import { createFileRoute } from '@tanstack/react-router';
import { ReactNode } from 'react';

const Favorites = (): ReactNode => <div>Hello from favorites!</div>;

export const Route = createFileRoute('/favorites')({
  component: Favorites,
});
