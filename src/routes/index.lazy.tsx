import { useTitle } from '@/hooks/use-title';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  useTitle('Home');

  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}
