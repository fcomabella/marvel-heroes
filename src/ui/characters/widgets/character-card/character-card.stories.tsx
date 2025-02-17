import type { Meta, StoryObj } from '@storybook/react';
import { CharacterCard as CharacterCardComponent } from './character-card';
import { ReactNode } from 'react';
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';

const meta: Meta<typeof CharacterCardComponent> = {
  component: CharacterCardComponent,
  decorators: [
    (Story): ReactNode => (
      <RouterProvider
        router={
          createRouter({
            history: createMemoryHistory(),
            routeTree: createRootRoute({
              component: Story,
            }),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }) as any
        }
      />
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CharacterCardComponent>;

export const CharacterCard: Story = {
  args: {
    character: {
      name: 'test hero',
      thumbnail: 'example-hero.png',
      isFavorite: false,
      id: 1,
    },
  },
};
