import type { User } from '@/types/user/User'
import { Avatar, Tooltip } from 'antd'
import { User as UserIcon } from 'lucide-react'

type UserAvatarGroupProps = {
  users: User[]
  size?: number
  maxDisplay?: number
}

function UserAvatarGroup({ users, size = 28, maxDisplay = 3 }: UserAvatarGroupProps) {
  const displayUsers = users.slice(0, maxDisplay)

  return (
    <Avatar.Group maxCount={maxDisplay}>
      {displayUsers.map((user) => (
        <Tooltip key={user.id} title={user.name} placement="top">
          <Avatar
            src={user.avatar}
            size={size}
            icon={user.avatar || <UserIcon size={size / 2} />}
          />
        </Tooltip>
      ))}
    </Avatar.Group>
  )
}

export default UserAvatarGroup
