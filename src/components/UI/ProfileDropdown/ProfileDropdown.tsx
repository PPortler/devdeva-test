import {
  ChevronDown,
  LogOut,
  Settings,
  User,
} from 'lucide-react'

import { Avatar, Button, Dropdown } from 'antd'

// Mock profile menu items
const profileMenuItems = [
  {
    key: 'profile',
    icon: (
      <User
        size={16}
        className="text-zinc-600"
      />
    ),
    label: 'My Profile',
  },
  {
    key: 'settings',
    icon: (
      <Settings
        size={16}
        className="text-zinc-600"
      />
    ),
    label: 'Settings',
  },
  {
    type: 'divider' as const,
  },
  {
    key: 'logout',
    icon: (
      <LogOut
        size={16}
        className="text-red-500"
      />
    ),
    label: (
      <span className="text-red-500">
        Logout
      </span>
    ),
  },
]

function ProfileDropdown() {
  return (
    <Dropdown
      trigger={['click']}
      placement="bottomRight"
      menu={{
        items: profileMenuItems,
      }}
    >
      <Button
        type="text"
        className="
          !flex
          !h-12
          !items-center
          !gap-2
          !rounded-2xl
          !bg-transparent
          !px-0
          hover:!bg-transparent
        "
      >
        {/* AVATAR */}
        <Avatar
          size={30}
          className="
            !text-sm
          "
          src="https://i.pravatar.cc/150?img=1"
        />

        {/* ARROW */}
        <ChevronDown
          size={16}
          className="text-zinc-500"
        />
      </Button>
    </Dropdown>
  )
}

export default ProfileDropdown