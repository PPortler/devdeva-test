import {
  ChartSpline,
  LayoutDashboard,
} from 'lucide-react'
import type { HomeItem } from '../../types/home/HomeItem'

export const homeItems: HomeItem[] = [
  {
    title: 'Task Dashboard',
    description:
      'A modern task workspace for organizing work, tracking progress, and managing priorities in real time.',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    title: 'Daily Graph',
    description:
      'Interactive data visualization system with multi-axis charts, filtering tools, tooltips, and PDF export.',
    icon: ChartSpline,
    href: '/graph',
  },
]