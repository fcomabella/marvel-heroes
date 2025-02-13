import type { Meta, StoryObj } from '@storybook/react';
import { MarvelLogo as MarvelLogoComponent } from './marvel-logo';

const meta: Meta<typeof MarvelLogoComponent> = {
  component: MarvelLogoComponent,
};

export default meta;

type Story = StoryObj<typeof MarvelLogoComponent>;

export const MarvelLogo: Story = {};
