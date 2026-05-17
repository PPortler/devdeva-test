import { Layout } from 'antd'

import Header from './Header'
import SideBar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useThemeStore } from '@/stores/app/themeStore'

const { Content } = Layout

function DashboardLayout() {
  const { theme } = useThemeStore()

  return (
    <Layout
      className="min-h-screen"
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      {/* SIDEBAR */}
      <SideBar />

      {/* MAIN */}
      <Layout
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        {/* HEADER */}
        <Header />

        {/* CONTENT */}
        <Content
          style={{
            backgroundColor: theme.colors.background,
          }}
        >
          <div
            className="
              container-dashboard
              py-7
              min-h-[calc(100vh-128px)]
            "
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout
