import { setupServer } from 'msw/node';
import { handlers } from '@__tests__/server/handlers';

export const server = setupServer(...handlers);
