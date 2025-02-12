import { createFileRoute } from '@tanstack/react-router';
import { ReactNode } from 'react';

function Index(): ReactNode {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: Index,
});
