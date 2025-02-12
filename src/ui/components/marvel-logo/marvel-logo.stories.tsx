import type { Meta, StoryObj } from '@storybook/react';
import { MarvelLogo } from './marvel-logo';

const meta: Meta<typeof MarvelLogo> = {
  component: MarvelLogo,
};

export default meta;

type Story = StoryObj<typeof MarvelLogo>;

export const Logo: Story = {};
