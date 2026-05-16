// TODO: ลบไฟล์นี้เมื่อ integrate API จริงแล้ว
import type { Task } from '@/types/task/Task'
import { TASK_STATUS, TASK_STATUS_LABEL } from '@/types/task/TaskStatus'
import { TASK_PRIORITY, TASK_PRIORITY_LABEL } from '@/types/task/TaskPriority'

const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Design homepage mockups',
    description:
      'Create high-fidelity mockups for the new landing page',
    status: TASK_STATUS.TODO,
    priority: TASK_PRIORITY.HIGH,
    dueDate: 'Oct 28',
    progress: 0,
    tags: ['Design', 'UI/UX', 'Frontend'],
    assignees: [
      {
        id: '1',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        avatar:
          'https://i.pravatar.cc/150?img=1',
      },
      {
        id: '2',
        name: 'Bob Smith',
        email: 'bob@example.com',
        avatar:
          'https://i.pravatar.cc/150?img=2',
      },
    ],
  },

  {
    id: '2',
    title: 'Setup database schema',
    description:
      'Initialize PostgreSQL database with proper schema and migrations',
    status: TASK_STATUS.DOING,
    priority: TASK_PRIORITY.HIGH,
    dueDate: 'Nov 5',
    progress: 60,
    tags: ['Backend', 'Database', 'DevOps'],
    assignees: [
      {
        id: '3',
        name: 'Carol White',
        email: 'carol@example.com',
        avatar:
          'https://i.pravatar.cc/150?img=3',
      },
    ],
  },

  {
    id: '3',
    title: 'Implement authentication',
    description:
      'Add JWT-based authentication with OAuth2 support',
    status: TASK_STATUS.DOING,
    priority: TASK_PRIORITY.HIGH,
    dueDate: 'Nov 12',
    progress: 45,
    tags: ['Backend', 'Security', 'Auth'],
    assignees: [
      {
        id: '4',
        name: 'David Brown',
        email: 'david@example.com',
        avatar:
          'https://i.pravatar.cc/150?img=4',
      },
      {
        id: '5',
        name: 'Eve Davis',
        email: 'eve@example.com',
        avatar:
          'https://i.pravatar.cc/150?img=5',
      },
    ],
  },

  {
    id: '4',
    title: 'API integration with third-party services',
    description:
      'Integrate Stripe, SendGrid, and AWS S3 APIs',
    status: TASK_STATUS.TODO,
    priority: TASK_PRIORITY.MEDIUM,
    dueDate: 'Dec 5',
    progress: 0,
    tags: ['Backend', 'Integration', 'APIs'],
    assignees: [
      {
        id: '2',
        name: 'Bob Smith',
        email: 'bob@example.com',
        avatar:
          'https://i.pravatar.cc/150?img=2',
      },
    ],
  },

  {
    id: '5',
    title: 'Deploy to production',
    description:
      'Set up CI/CD pipeline and deploy to AWS EC2',
    status: TASK_STATUS.DONE,
    priority: TASK_PRIORITY.HIGH,
    dueDate: 'Oct 28',
    progress: 100,
    tags: ['DevOps', 'CI/CD', 'Production'],
    assignees: [
      {
        id: '4',
        name: 'David Brown',
        email: 'david@example.com',
        avatar:
          'https://i.pravatar.cc/150?img=4',
      },
      {
        id: '5',
        name: 'Eve Davis',
        email: 'eve@example.com',
        avatar:
          'https://i.pravatar.cc/150?img=5',
      },
    ],
  },

  {
    id: '6',
    title: 'User testing and feedback collection',
    description:
      'Conduct user testing sessions and collect feedback',
    status: TASK_STATUS.DONE,
    priority: TASK_PRIORITY.MEDIUM,
    dueDate: 'Oct 28',
    progress: 100,
    tags: ['QA', 'Testing', 'Feedback'],
    assignees: [
      {
        id: '1',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        avatar:
          'https://i.pravatar.cc/150?img=1',
      },
      {
        id: '3',
        name: 'Carol White',
        email: 'carol@example.com',
        avatar:
          'https://i.pravatar.cc/150?img=3',
      },
    ],
  },

  {
    id: '7',
    title: 'Write unit tests',
    description:
      'Increase test coverage to 80% for critical modules',
    status: TASK_STATUS.DOING,
    priority: TASK_PRIORITY.MEDIUM,
    dueDate: 'Nov 19',
    progress: 35,
    tags: ['Testing', 'Quality', 'Backend'],
    assignees: [
      {
        id: '2',
        name: 'Bob Smith',
        email: 'bob@example.com',
        avatar:
          'https://i.pravatar.cc/150?img=2',
      },
    ],
  },

  {
    id: '8',
    title: 'Documentation and README',
    description:
      'Create comprehensive API documentation and setup guide',
    status: TASK_STATUS.TODO,
    priority: TASK_PRIORITY.LOW,
    dueDate: 'Dec 12',
    progress: 0,
    tags: ['Documentation', 'Knowledge', 'Backend'],
    assignees: [
      {
        id: '3',
        name: 'Carol White',
        email: 'carol@example.com',
        avatar:
          'https://i.pravatar.cc/150?img=3',
      },
    ],
  },
]

// API Response Types ถ้ามี api จริง type พวกนี้ผมจะย้ายไปไว้อยู่กับพวก service ครับ
type GetTasksResponse = {
  ok: boolean
  data: {
    tasks: Task[]
    pagination: {
      total_count: number
      total_page: number
      current_page: number
      limit: number
    }
  }
  message?: string
}

type GetTasksParams = {
  page: number
  limit: number
  search?: string
  searchHeader?: string
  status?: string
  priority?: string
}

export const useMockData = () => {
  const getTasksData = async (params: GetTasksParams): Promise<GetTasksResponse> => {
    const {
      page = 1,
      limit = 10,
      search = '',
      searchHeader = '',
      status,
      priority,
    } = params

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Filter by search (หาชื่อ task หรือ description)
    let filteredTasks = [...MOCK_TASKS]
    if (search) {
      const searchLower = search.toLowerCase()
      filteredTasks = filteredTasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchLower) ||
          task.description?.toLowerCase().includes(searchLower)
      )
    }

    // Filter by searchHeader (หาชื่อ task หรือ priority หรือ status)
    if (searchHeader) {
      const searchHeaderLower = searchHeader.toLowerCase()
      filteredTasks = filteredTasks.filter((task) => {
        const taskTitle = task.title.toLowerCase().includes(searchHeaderLower)
        const taskPriority = TASK_PRIORITY_LABEL[task.priority]
          .toLowerCase()
          .includes(searchHeaderLower)
        const taskStatus = TASK_STATUS_LABEL[task.status]
          .toLowerCase()
          .includes(searchHeaderLower)
        return taskTitle || taskPriority || taskStatus
      })
    }

    // Filter by status
    if (status) {
      filteredTasks = filteredTasks.filter((task) => task.status === status)
    }

    // Filter by priority
    if (priority) {
      filteredTasks = filteredTasks.filter((task) => task.priority === priority)
    }

    // Pagination
    const totalCount = filteredTasks.length
    const totalPage = Math.ceil(totalCount / limit)
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedTasks = filteredTasks.slice(startIndex, endIndex)

    return {
      ok: true,
      data: {
        tasks: paginatedTasks,
        pagination: {
          total_count: totalCount,
          total_page: totalPage,
          current_page: page,
          limit,
        },
      },
      message: 'Success',
    }
  }

  return {
    getTasksData,
  }
}
