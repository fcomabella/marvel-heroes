import { createFileRoute } from '@tanstack/react-router';
import { ReactNode } from 'react';

export const Route = createFileRoute('/characters/$characterId')({
  component: RouteComponent,
});

function RouteComponent(): ReactNode {
  const { characterId } = Route.useParams();
  return <div>Hello "/characters/${characterId}"!</div>;
}
