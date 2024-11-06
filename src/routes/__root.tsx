import { queryClient } from '@/api';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { QueryClientProvider } from '@tanstack/react-query';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="w-full h-full p-8 pl-24 pr-24">
          <Navigation />
          <Outlet />
          <TanStackRouterDevtools />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  ),
});
