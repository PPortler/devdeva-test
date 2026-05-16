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
          [&_.ant-pagination-item]:!rounded-lg
          [&_.ant-pagination-item]:!border-zinc-300
          [&_.ant-pagination-item-active]:!border-[${theme.colors.primary}]
          [&_.ant-pagination-item-active]:!bg-[${theme.colors.primary}]
          [&_.ant-pagination-item-active_a]:!text-[${theme.colors.textPrimary}]
        `}
      />
    </div>
  )
}

export default AppPagination