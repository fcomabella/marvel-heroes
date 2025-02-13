import type { Meta, StoryObj } from '@storybook/react';
import {
  createMemoryHistory,
  createRootRoute,
  RouterProvider,
  createRouter,
} from '@tanstack/react-router';
import { Header as HeaderComponent } from '@ui/components/header/header';
import { ReactNode } from 'react';

const meta: Meta<typeof HeaderComponent> = {
  component: HeaderComponent,
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

type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {};
