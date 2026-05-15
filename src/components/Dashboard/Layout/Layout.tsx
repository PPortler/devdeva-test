import type { ReactNode } from 'react'

import { Layout } from 'antd'

import DashboardHeader from '../Header/Header'
import SideBar from '../Sidebar/Sidebar'
import { dashboardTheme } from '@/constants/dashboard/dashboard-theme'

const { Content } = Layout

interface DashboardLayoutProps {
  children: ReactNode
}

function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <Layout
      className="min-h-screen"
      style={{
        backgroundColor: dashboardTheme.colors.background,
      }}
    >
      {/* SIDEBAR */}
      <SideBar />

      {/* MAIN */}
      <Layout
        style={{
          backgroundColor: dashboardTheme.colors.background,
        }}
      >
        {/* HEADER */}
        <DashboardHeader />

        {/* CONTENT */}
        <Content
          style={{
            backgroundColor: dashboardTheme.colors.background,
          }}
        >
          <div
            className="
              container-dashboard
              py-7
              min-h-[calc(100vh-128px)]
            "
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout