import type { Meta, StoryObj } from '@storybook/react';
import { Favorites as FavoritesComponent } from './favorites';

const meta: Meta<typeof FavoritesComponent> = {
  component: FavoritesComponent,
};

export default meta;

type Story = StoryObj<typeof FavoritesComponent>;

export const Favorites: Story = {
  args: {
    totalFavorites: 1,
  },
};
