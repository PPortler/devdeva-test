import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import HomePage from '@/pages/Home'
import DashboardPage from '@/pages/Dashboard'
import GraphPage from '@/pages/Graph'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/graph',
    element: <GraphPage />,
  },
])

function AppRoutes() {
  return <RouterProvider router={router} />
}

export default AppRoutes