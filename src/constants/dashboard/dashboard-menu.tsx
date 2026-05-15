import {
  LayoutDashboard,
  Settings,
  SquareCheckBig,
  Users,
} from 'lucide-react'

export const dashboardMenuItems = [
  {
    key: '/dashboard',
    icon: <LayoutDashboard size={18} />,
    label: 'Dashboard',
  },
  {
    key: '/my-tasks',
    icon: <SquareCheckBig size={18} />,
    label: 'My Tasks',
  },
  {
    key: '/team',
    icon: <Users size={18} />,
    label: 'Team',
  },
  {
    key: '/settings',
    icon: <Settings size={18} />,
    label: 'Settings',
  },
]