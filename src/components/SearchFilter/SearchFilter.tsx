import { X } from 'lucide-react'
import AppInput from '@/components/Form/AppInput/AppInput'
import AppSelect from '@/components/Form/AppSelect/AppSelect'
import AppButton from '@/components/Form/AppButton/AppButton'
import { PRIORITY_OPTIONS } from '@/constants/options/priority-options'
import { STATUS_OPTIONS } from '@/constants/options/status-options'
import type { TaskStatus } from '@/types/task/TaskStatus'
import type { TaskPriority } from '@/types/task/TaskPriority'
import { useThemeStore } from '@/stores/app/themeStore'

type SearchFilterProps = {
  search: string
  placeholder?: string
  onSearchChange: (value: string) => void
  onClear: () => void
  selectedStatus?: TaskStatus
  onStatusChange?: (value: TaskStatus) => void
  selectedPriority?: TaskPriority
  onPriorityChange?: (value: TaskPriority) => void
}

function SearchFilter({
  search,
  placeholder = "Search",
  onSearchChange,
  onClear,
  selectedStatus,
  onStatusChange,
  selectedPriority,
  onPriorityChange,
}: SearchFilterProps) {
  const { theme } = useThemeStore()

  return (
    <div className="flex gap-2 items-end flex-wrap">
      <AppInput
        placeholder={placeholder}
        icon={undefined}
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        containerClassName="w-[750px]"
      />
      <AppSelect
        placeholder="All Priorities"
        icon={undefined}
        options={[...PRIORITY_OPTIONS]}
        value={selectedPriority}
        onChange={onPriorityChange}
        containerClassName="max-w-56 flex-1"
      />
      <AppSelect
        placeholder="Select Status"
        icon={undefined}
        options={[...STATUS_OPTIONS]}
        value={selectedStatus}
        onChange={onStatusChange}
        containerClassName="max-w-56 flex-1"
      />

      {/* Clear Button */}
      <AppButton
        icon={<X size={18} />}
        backgroundColor={`${theme.colors.header}`}
        textColor={`${theme.colors.textContent}`}
        onClick={onClear}
      />
    </div>
  )
}

export default SearchFilter
