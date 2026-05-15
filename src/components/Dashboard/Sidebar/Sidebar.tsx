import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { Button, Layout, Menu } from 'antd'
import devdevaLogo from '@/assets/images/devdeva_logo.png'
import { dashboardMenuItems } from '@/constants/dashboard/dashboard-menu'
import { dashboardTheme } from '@/constants/dashboard/dashboard-theme'

const { Sider } = Layout

function SideBar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={260}
      collapsedWidth={90}
      style={{
        background:
          dashboardTheme.colors.sidebar,
        borderColor: dashboardTheme.colors.borderSidebar,
      }}
      className="
        min-h-screen
        border-r
      "
    >
      {/* HEADER */}
      <div
        className={`
          flex
          h-14
          items-center
          border-b
          px-5
          transition-all
          duration-300

          ${
            collapsed
              ? 'justify-center'
              : 'justify-between'
          }
        `}
        style={{
          borderBottomColor: dashboardTheme.colors.borderSidebar,
        }}
      >
        {/* LOGO */}
        <div
          className={`
            flex
            items-center
            transition-all
            duration-300

            ${collapsed ? '' : 'gap-3'}
          `}
        >
          <img
            src={devdevaLogo}
            alt="TaskFlow"
            className="
              h-8
              w-8
              rounded-sm
              object-cover
            "
          />

          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold" style={{ color: dashboardTheme.colors.textPrimary }}>
                TaskFlow
              </h1>
            </div>
          )}
        </div>

        {/* COLLAPSE BUTTON */}
        {!collapsed && (
          <Button
            type="text"
            onClick={() =>
              setCollapsed(true)
            }
            icon={
              <ChevronLeft
                size={18}
                color={dashboardTheme.colors.textPrimary}
              />
            }
            className="
              !flex
              !h-10
              !w-10
              !items-center
              !justify-center
              !rounded-lg
            "
            style={{
              borderColor: dashboardTheme.colors.borderSidebar,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = dashboardTheme.colors.borderSidebar
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          />
        )}
      </div>

      {/* EXPAND BUTTON */}
      {collapsed && (
        <div className="mt-4 flex justify-center">
          <Button
            type="text"
            onClick={() =>
              setCollapsed(false)
            }
            icon={
              <ChevronRight
                size={18}
                color={dashboardTheme.colors.textPrimary}
              />
            }
            className="
              !flex
              !h-10
              !w-10
              !items-center
              !justify-center
              !rounded-xl
            "
            style={{
              borderColor: dashboardTheme.colors.borderSidebar,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = dashboardTheme.colors.borderSidebar
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          />
        </div>
      )}

      {/* MENU */}
      <div className="px-3 py-4">
        <style>{`
          .dashboard-sidebar-menu .ant-menu-item {
            color: ${dashboardTheme.colors.textSecondary} !important;
          }
          .dashboard-sidebar-menu .ant-menu-item-selected {
            background-color: ${dashboardTheme.colors.primary} !important;
            color: ${dashboardTheme.colors.textPrimary} !important;
          }
          .dashboard-sidebar-menu .ant-menu-item:hover {
            background-color: ${dashboardTheme.colors.primaryHover} !important;
            color: ${dashboardTheme.colors.textPrimary} !important;
          }
        `}</style>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          selectedKeys={['/dashboard']}
          items={dashboardMenuItems}
          className="
            dashboard-sidebar-menu
            border-none
            !bg-transparent
            [&_.ant-menu-item]:!rounded-lg
          "
        />
      </div>
    </Sider>
  )
}

export default SideBar