import { X } from 'lucide-react'
import AppInput from '@/components/Form/AppInput/AppInput'
import AppSelect from '@/components/Form/AppSelect/AppSelect'
import { dashboardTheme } from '@/constants/dashboard/dashboard-theme'
import AppButton from '@/components/Form/AppButton/AppButton'
import { PRIORITY_OPTIONS } from '@/constants/options/priority-options'
import { STATUS_OPTIONS } from '@/constants/options/status-options'

type SearchFilterProps = {
  search: string
  onSearchChange: (value: string) => void
  onClear: () => void
  selectedStatus1?: string
  onStatusChange1?: (value: string) => void
  selectedStatus2?: string
  onStatusChange2?: (value: string) => void
}

function SearchFilter({
  search,
  onSearchChange,
  onClear,
  selectedStatus1,
  onStatusChange1,
  selectedStatus2,
  onStatusChange2,
}: SearchFilterProps) {
  return (
    <div className="flex gap-2 items-end flex-wrap">
      <AppInput
        placeholder="Search"
        icon={undefined}
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        containerClassName="w-[750px]"
      />
      <AppSelect
        placeholder="All Priorities"
        icon={undefined}
        options={[...PRIORITY_OPTIONS]}
        value={selectedStatus1}
        onChange={onStatusChange1}
        containerClassName="max-w-56 flex-1"
      />
      <AppSelect
        placeholder="Select Status"
        icon={undefined}
        options={[...STATUS_OPTIONS]}
        value={selectedStatus2}
        onChange={onStatusChange2}
        containerClassName="max-w-56 flex-1"
      />

      {/* Clear Button */}
      <AppButton
        icon={<X size={18} />}
        backgroundColor={`${dashboardTheme.colors.textPrimary}`}
        textColor={`${dashboardTheme.colors.textContent}`}
        onClick={onClear}
      />
    </div>
  )
}

export default SearchFilter
