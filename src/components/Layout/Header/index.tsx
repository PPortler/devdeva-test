import AppInput from '@/components/Form/AppInput/AppInput'
import { Search } from 'lucide-react'
import NotificationButton from '@/components/UI/NotificationButton/NotificationButton'
import ProfileDropdown from '@/components/UI/ProfileDropdown/ProfileDropdown'
import useDashboardStore from '@/stores/dashboard/useDashboardStore'
import { useThemeStore } from '@/stores/app/themeStore'
import ThemeDropdown from '@/components/UI/ThemeDropdown/ThemeDropdown'

function Header() {
  const { theme } = useThemeStore()

  const { searchHeader, setSearchHeader } =
    useDashboardStore()

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
            placeholder="Search tasks or priority or status"
            icon={Search}
            value={searchHeader}
            onChange={(e) =>
              setSearchHeader(e.target.value)
            }
            containerClassName='w-96'
          />
          <NotificationButton />
          <ThemeDropdown />
          <ProfileDropdown />
        </div>
      </div>
    </header>
  )
}

export default Header
