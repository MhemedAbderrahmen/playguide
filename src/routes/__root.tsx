import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full h-full p-8">
        <div className='flex flex-row gap-2'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <ModeToggle />
        </div>
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </ThemeProvider>
  ),
});
