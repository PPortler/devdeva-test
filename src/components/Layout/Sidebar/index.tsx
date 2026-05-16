import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { Button, Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import devdevaLogo from '@/assets/images/devdeva_logo.png'
import { dashboardMenuItems } from '@/constants/dashboard/dashboard-menu'
import { theme } from '@/constants/theme/theme'

const { Sider } = Layout

function SideBar() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={260}
      collapsedWidth={90}
      style={{
        background:
          theme.colors.sidebar,
        borderColor: theme.colors.borderSidebar,
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
          h-18
          items-center
          border-b
          px-5
          transition-all
          duration-300

          ${collapsed
            ? 'justify-center'
            : 'justify-between'
          }
        `}
        style={{
          borderBottomColor: theme.colors.borderSidebar,
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
              <h1 className="text-lg font-bold" style={{ color: theme.colors.textPrimary }}>
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
                color={theme.colors.textPrimary}
              />
            }
            className="
              !flex
              !h-10
              !w-10
              !items-center
              !justify-center
              form-rounded
            "
            style={{
              borderColor: theme.colors.borderSidebar,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.borderSidebar
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
                color={theme.colors.textPrimary}
              />
            }
            className="
              !flex
              !h-10
              !w-10
              !items-center
              !justify-center
              form-rounded
            "
            style={{
              borderColor: theme.colors.borderSidebar,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.borderSidebar
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
            color: ${theme.colors.textSecondary} !important;
          }
          .dashboard-sidebar-menu .ant-menu-item-selected {
            background-color: ${theme.colors.primary} !important;
            color: ${theme.colors.textPrimary} !important;
          }
          .dashboard-sidebar-menu .ant-menu-item:hover {
            background-color: ${theme.colors.primaryHover} !important;
            color: ${theme.colors.textPrimary} !important;
          }
        `}</style>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          selectedKeys={[location.pathname]}
          onClick={(item) => navigate(item.key)}
          items={dashboardMenuItems}
          className="
            dashboard-sidebar-menu
            border-none
            !bg-transparent
          "
        />
      </div>
    </Sider>
  )
}

export default SideBar
