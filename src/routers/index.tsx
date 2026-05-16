import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import HomePage from '@/pages/Home'
import DashboardPage from '@/pages/Dashboard'
import GraphPage from '@/pages/Graph'
import MyTasksPage from '@/pages/MyTasks'
import TeamPage from '@/pages/Team'
import SettingsPage from '@/pages/Settings'
import DashboardLayout from '@/components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/graph',
    element: <GraphPage />,
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/my-tasks',
        element: <MyTasksPage />,
      },
      {
        path: '/team',
        element: <TeamPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
  },
])

function AppRoutes() {
  return <RouterProvider router={router} />
}

export default AppRoutes