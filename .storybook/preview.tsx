import type { Preview } from '@storybook/react';
import React, { ReactNode } from 'react';
import '@fontsource/roboto-condensed/400.css';
import { CssReset } from '../src/ui/components/css-reset';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context): ReactNode => (
      <>
        <CssReset />
        <Story {...context} />
      </>
    ),
  ],
};

export default preview;
