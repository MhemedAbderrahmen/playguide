import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full h-full p-8">
        <Navigation />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </ThemeProvider>
  ),
});
