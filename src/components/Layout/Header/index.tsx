import { useState } from 'react'
import AppInput from '@/components/Form/AppInput/AppInput'
import { theme } from '@/constants/theme/theme'
import { Search } from 'lucide-react'
import NotificationButton from '@/components/UI/NotificationButton/NotificationButton'
import ProfileDropdown from '@/components/UI/ProfileDropdown/ProfileDropdown'

function Header() {
  const [search, setSearch] = useState('')

  return (
    <header
      className="
        h-18
        flex 
        items-center
      "
      style={{
        backgroundColor: theme.colors.header,
        borderBottomColor: theme.colors.borderSidebar,
        color: theme.colors.textContent,
      }}
    >
      {/* CONTAINER */}
      <div className="container-dashboard flex w-full items-center justify-between">
        {/* LEFT */}
        <div>
          <h1
            className="text-xl font-bold"
          >
            Dashboard
          </h1>
        </div>

        {/* RIGHT */}
        <div className='flex items-center gap-3'>
          <AppInput
            placeholder="Search"
            icon={Search}
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            containerClassName='w-56'
          />
          <NotificationButton/>
          <ProfileDropdown />
        </div>
      </div>
    </header>
  )
}

export default Header
