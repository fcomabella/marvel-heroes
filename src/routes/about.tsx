import { createFileRoute } from '@tanstack/react-router';
import { ReactNode } from 'react';

const About = (): ReactNode => <div className="p-2">Hello from About!</div>;

export const Route = createFileRoute('/about')({
  component: About,
});
