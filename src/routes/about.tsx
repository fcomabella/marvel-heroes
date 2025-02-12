import { createFileRoute } from '@tanstack/react-router'
import { ReactNode } from 'react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About(): ReactNode {
  return <div className="p-2">Hello from About!</div>
}
