import { ChevronDown } from 'lucide-react'
import { Button, Dropdown } from 'antd'
import { useThemeStore } from '@/stores/app/themeStore'
import type { ThemeKey } from '@/stores/app/themeStore'
import devdevaLogo from '@/assets/images/devdeva_logo.png'
import LightMode from '@/assets/images/theme-light.png'

// Theme menu items
const themeMenuItems = [
  {
    key: 'light',
    label: (
      <div className="flex items-center gap-2">
        <img
          src={LightMode}
          className="h-6 w-6 rounded-full object-cover"
        />
        <span>Light</span>
      </div>
    ),
  },
  {
    key: 'deva',
    label: (
      <div className="flex items-center gap-2">
        <img
          src={devdevaLogo}
          className="h-6 w-6 rounded-full object-cover"
        />
        <span>Devdeva</span>
      </div>
    ),
  },
]

function ThemeDropdown() {
  const { themeKey, setTheme } = useThemeStore()

  const handleThemeChange = (key: string) => {
    setTheme(key as ThemeKey)
  }

  return (
    <Dropdown
      trigger={['click']}
      placement="bottomRight"
      menu={{
        items: themeMenuItems,
        onClick: (e) => handleThemeChange(e.key),
        selectedKeys: [themeKey],
      }}
    >
      <Button
        type="text"
        className="
          !flex
          !h-12
          !items-center
          !gap-1
          !rounded-2xl
          !bg-transparent
          !px-0
        "
      >
        {/* CURRENT THEME ICON */}
        <img
          src={
            themeKey === 'deva'
              ? devdevaLogo
              : LightMode
          }
          alt="theme"
          className="h-7 w-7 rounded-full object-cover"
        />

        <ChevronDown size={16} className="text-zinc-500" />
      </Button>
    </Dropdown>
  )
}

export default ThemeDropdown