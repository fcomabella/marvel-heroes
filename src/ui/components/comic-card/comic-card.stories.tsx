import type { Meta, StoryObj } from '@storybook/react';
import { ComicCard as ComicCardComponent } from '@ui/components/comic-card/comic-card';

const meta: Meta<typeof ComicCardComponent> = {
  component: ComicCardComponent,
};

export default meta;

type Story = StoryObj<typeof ComicCardComponent>;

export const ComicCard: Story = {
  args: {
    comic: {
      id: 1,
      thumbnail: 'example-hero.png',
      title: 'Comic book title',
      year: new Date().getFullYear().toString(),
    },
  },
};
