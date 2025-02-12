import type { Meta, StoryObj } from '@storybook/react';
import { HeartIcon as HeartIconComponent } from './heart-icon';

const meta: Meta<typeof HeartIconComponent> = {
  component: HeartIconComponent,
};

export default meta;

type Story = StoryObj<typeof HeartIconComponent>;

export const HeartIcon: Story = {
  args: {
    unselected: false,
  },
};
