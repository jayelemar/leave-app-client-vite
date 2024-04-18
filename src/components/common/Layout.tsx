import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation()
  const dashboardPaths = ['/dashboard', '/request-leave', '/profile']
  const isDashboard = dashboardPaths.some((path) => location.pathname.startsWith(path))
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
      {!isDashboard ? <Header /> : null}

      <main className="flex flex-grow items-center">{children}</main>
    </div>
  )
}
export default Layout
