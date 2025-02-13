import type { Meta, StoryObj } from '@storybook/react';
import { SearchField as SearchFieldComponent } from './search-field';
import { ChangeEventHandler } from 'react';
import { useArgs } from '@storybook/preview-api';
import { ReactNode } from '@tanstack/react-router';
import { fn } from '@storybook/test';

const meta: Meta<typeof SearchFieldComponent> = {
  component: SearchFieldComponent,
  decorators: [
    function Component(Story, context): ReactNode {
      const [args, setArgs] = useArgs();
      const inputOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        args.onChange(e);
        setArgs({ value: e.target.value });
      };

      return <Story args={{ ...context.args, onChange: inputOnChange }} />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof SearchFieldComponent>;

export const SearchField: Story = {
  args: {
    label: 'Search a character',
    value: '',
    onChange: fn(),
    name: 'marvel-search',
  },
};
