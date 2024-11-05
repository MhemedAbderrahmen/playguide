import { useTitle } from '@/hooks/use-title';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  useTitle('About');
  return <div>About</div>;
}
