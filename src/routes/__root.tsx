import { Navigation } from '@/utility/Navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        <Outlet />
      </main>

    </>
  ),
})