import { Bell } from 'lucide-react'
import { Badge, Button, Dropdown } from 'antd'

// Mock notification data
const notificationItems = [
  {
    key: '1',
    label: (
      <div className="flex flex-col">
        <span className="font-medium text-zinc-800">
          New Task Assigned
        </span>

        <span className="text-xs text-zinc-500">
          UI Dashboard design updated
        </span>
      </div>
    ),
  },
  {
    key: '2',
    label: (
      <div className="flex flex-col">
        <span className="font-medium text-zinc-800">
          Team Meeting
        </span>

        <span className="text-xs text-zinc-500">
          Today at 3:00 PM
        </span>
      </div>
    ),
  },
  {
    key: '3',
    label: (
      <div className="flex flex-col">
        <span className="font-medium text-zinc-800">
          Project Updated
        </span>

        <span className="text-xs text-zinc-500">
          Graph analytics synced
        </span>
      </div>
    ),
  },
]

function NotificationButton() {
  return (
    <Dropdown
      menu={{
        items: notificationItems,
      }}
      trigger={['click']}
      placement="bottomRight"
    >
      <Button
        type="text"
        className="
          !flex
          !h-15
          !w-12
          hover:!bg-transparent
        "
      >
        <Badge count={notificationItems.length} size="small">
          <Bell
            size={25}
          />
        </Badge>
      </Button>
    </Dropdown>
  )
}

export default NotificationButton