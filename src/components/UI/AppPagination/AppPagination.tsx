import { theme } from '@/constants/theme/theme'
import { Pagination } from 'antd'

type AppPaginationProps = {
  current: number
  total: number
  pageSize: number
  totalPage: number
  tasksLength: number
  totalCount: number
  onChange: (
    page: number,
    pageSize: number,
  ) => void
}

function AppPagination({
  current,
  total,
  pageSize,
  totalPage,
  tasksLength,
  totalCount,
  onChange,
}: AppPaginationProps) {
  return (
    <div
      className="
        flex
        justify-end
        items-center
        gap-2
      "
    >
      <div className="text-sm"
      style={{
        color: theme.colors.textSecondary
      }}
      >
        Showing {tasksLength} of {totalCount} tasks (Page {current}/{totalPage})
      </div>

      <Pagination
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        showSizeChanger={false}
        className={`
          [&_.ant-pagination-item]:!form-rounded
          [&_.ant-pagination-item]:!border-[${theme.colors.primary}]
        `}
      />
    </div>
  )
}

export default AppPagination