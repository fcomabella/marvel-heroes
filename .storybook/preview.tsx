import type { Preview } from '@storybook/react';
import React, { ReactNode } from 'react';
import '@fontsource/roboto-condensed/400.css';
import { CssReset } from '../src/ui/components/css-reset';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/ui/theme';

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssReset />
          <Story {...context} />
        </ThemeProvider>
      </QueryClientProvider>
    ),
  ],
};

export default preview;
