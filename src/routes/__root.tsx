import Footer from '@/components/Footer/footer-section'
import { Navigation } from '@/utility/Navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />

    </>
  ),
})