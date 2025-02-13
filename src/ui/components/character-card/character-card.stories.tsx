import type { Meta, StoryObj } from '@storybook/react';
import { CharacterCard as CharacterCardComponent } from './character-card';

const meta: Meta<typeof CharacterCardComponent> = {
  component: CharacterCardComponent,
};

export default meta;

type Story = StoryObj<typeof CharacterCardComponent>;

export const CharacterCard: Story = {
  args: {
    name: 'test hero',
    image: 'example-hero.png',
    isFavorite: false,
  },
};
