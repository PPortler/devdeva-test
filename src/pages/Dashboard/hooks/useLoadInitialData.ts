import { useEffect, useState } from 'react'
import type { Task } from '@/types/task/Task'
import type { TaskStatus } from '@/types/task/TaskStatus'
import type { TaskPriority } from '@/types/task/TaskPriority'

// TODO: delete when connecting to real API
import { useMockData } from './useMockData'
import type { User } from '@/types/user/User'

type Params = {
    page: number
    limit: number
    searchHeader: string
    search: string
    status: TaskStatus | undefined
    priority: TaskPriority | undefined
    setTotalPage: (total: number) => void
    setTotalCount: (count: number) => void
}

export const useLoadInitialData = ({
    page,
    limit,
    searchHeader,
    search,
    status,
    priority,
    setTotalPage,
    setTotalCount,
}: Params) => {

    const [isLoadingInitialData, setIsLoadingInitialData] = useState(false)
    const [tasks, setTasks] = useState<Task[]>([])
    const [users, setUsers] = useState<User[]>([])

    // TODO: deleted when connecting to real API
    const { getTasksData, getUsersData } = useMockData()

    // Call User For Options
    const callUserList = async () => {
        setUsers([])
        // TODO: replace with real API call
        const response = await getUsersData()

        if (!response.ok) return false

        setUsers(response.data.users)
        return true
    };

    // Call Tasks
    const callTasks = async () => {
        setTasks([])
        // TODO: replace with real API call
        const response = await getTasksData({
            page,
            limit,
            searchHeader,
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

        const promises = [callTasks(), callUserList()];
        const results = await Promise.all(promises);

        setIsLoadingInitialData(false);

        if (results.some((result) => !result)) {
            // TODO: เพิ่ม alert error
            console.error('Error loading initial data');
        }
    };

    // ไว้สำหรับ reload data หลังจาก create/edit task เสร็จ
    const reloadTasks = async (): Promise<void> => {
        setIsLoadingInitialData(true);

        const results = await callTasks();
        setIsLoadingInitialData(false);

        if (!results) {
            // TODO: เพิ่ม alert error
            console.error('Error reloading tasks');
        }
    };

    // Load initial data on component mount
    useEffect(() => {
        loadInitialData();
    }, [page, search, searchHeader, status, priority]);

    return {
        isLoadingInitialData,
        tasks,
        users,
        reloadTasks
    }
}
