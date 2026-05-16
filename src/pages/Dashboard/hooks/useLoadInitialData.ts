import { useEffect, useState } from 'react'
import type { Task } from '@/types/task/Task'
import type { TaskStatus } from '@/types/task/TaskStatus'
import type { TaskPriority } from '@/types/task/TaskPriority'

// TODO: delete when connecting to real API
import { useMockData } from './useMockData'

type Params = {
    page: number
    limit: number
    search: string
    status: TaskStatus | undefined
    priority: TaskPriority | undefined
    setTotalPage: (total: number) => void
    setTotalCount: (count: number) => void
}

export const useLoadInitialData = ({
    page,
    limit,
    search,
    status,
    priority,
    setTotalPage,
    setTotalCount,
}: Params) => {

    const [isLoadingInitialData, setIsLoadingInitialData] = useState(false)
    const [tasks, setTasks] = useState<Task[]>([])

    // TODO: deleted when connecting to real API
    const { getTasksData } = useMockData()

    const callTasks = async () => {
        setTasks([])
        // TODO: replace with real API call
        const response = await getTasksData({
            page,
            limit,
            search,
            status,
            priority,
        })

        if (!response.ok) return false

        setTasks(response.data.tasks)
        setTotalCount(response.data.pagination.total_count)
        setTotalPage(response.data.pagination.total_page)
        return true
    };

    const loadInitialData = async (): Promise<void> => {
        setIsLoadingInitialData(true);

        const promises = [callTasks()];
        const results = await Promise.all(promises);

        setIsLoadingInitialData(false);

        if (results.some((result) => !result)) {
            // TODO: เพิ่ม alert error
            console.error('Error loading initial data');
        }
    };

    // Load initial data on component mount
    useEffect(() => {
        loadInitialData();
    }, [page, search, status, priority]);

    return {
        isLoadingInitialData,
        tasks,
    }
}
