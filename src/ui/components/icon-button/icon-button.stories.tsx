import type { Meta, StoryObj } from '@storybook/react';
import { IconButton as IconButtonComponent } from './icon-button';
import { IconButtonProps } from '@ui/components/icon-button/icon-button-props';
import { HeartIcon } from '@ui/components/heart-icon';
import { fn } from '@storybook/test';
import { ReactNode } from 'react';

const IconButtonTemplate = (props: IconButtonProps): ReactNode => (
  <IconButtonComponent {...props}>
    <HeartIcon />
  </IconButtonComponent>
);

const meta: Meta<typeof IconButtonComponent> = {
  component: IconButtonTemplate,
};

export default meta;

type Story = StoryObj<typeof IconButtonComponent>;

export const IconButton: Story = {
  args: {
    onClick: fn(),
  },
};
