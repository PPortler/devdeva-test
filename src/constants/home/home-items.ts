import {
  ChartSpline,
  LayoutDashboard,
} from 'lucide-react'
import type { HomeItem } from '../../types/home/HomeItem'

export const homeItems: HomeItem[] = [
  {
    title: 'Task Dashboard',
    description:
      'Manage tasks, monitor progress, track priorities, and organize team workflows efficiently.',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    title: 'Daily Graph',
    description:
      'Visualize hourly analytics with interactive multi-axis charts, filters, tooltips, and PDF export.',
    icon: ChartSpline,
    href: '/graph',
  },
]