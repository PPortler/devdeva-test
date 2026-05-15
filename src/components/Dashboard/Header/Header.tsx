import { useState } from 'react'
import AppInput from '@/components/Form/AppInput/AppInput'
import { dashboardTheme } from '@/constants/dashboard/dashboard-theme'
import { Search } from 'lucide-react'
import NotificationButton from '@/components/UI/NotificationButton/NotificationButton'
import ProfileDropdown from '@/components/UI/ProfileDropdown/ProfileDropdown'

function DashboardHeader() {
  const [search, setSearch] = useState('')

  return (
    <header
      className="
        h-18
        flex 
        items-center
      "
      style={{
        backgroundColor: dashboardTheme.colors.header,
        borderBottomColor: dashboardTheme.colors.borderSidebar,
        color: dashboardTheme.colors.textHeader,
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

export default DashboardHeader