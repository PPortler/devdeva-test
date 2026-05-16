# AGENTS.md

## 📋 Project Overview
โปรเจกต์เป็นเว็บสำหรับการทำแบบทดสอบ (Testing) Frontend ของบริษัท Devdeva
- **Tech Stack**: React, TypeScript, Tailwind CSS, Ant Design, Vite
- **Main Pages**: Dashboard (task management), Graph (data visualization), Home, MyTasks, Settings, Team
- **Purpose**: Task management interface with dashboard and analytics

## 🚀 Commands
```bash
npm install          # ติดตั้ง dependencies
npm run dev          # เริ่ม development server
npm run lint         # ตรวจสอบ code style
npm run build        # build สำหรับ production
```

## 📁 Project Structure

```
src/
├── assets/           # รูปภาพและไฟล์ static
├── components/       # Reusable components
│   ├── Dashboard/    # Dashboard-specific components
│   │   └── hooks/    # Dashboard-specific hooks
│   ├── Form/         # Form inputs (AppButton, AppInput, AppSelect)
│   ├── Home/         # Home page components
│   ├── Layout/       # Layout wrappers (Header, Sidebar)
│   ├── SearchFilter/ # Search and filter components
│   └── UI/           # Generic UI components
├── constants/        # ค่าคงที่และ configuration
│   ├── home/         # Home page constants
│   ├── options/      # Select options (status, priority)
│   ├── dashboard/ # Dashboard menu config
│   └── theme/        # Color theme
├── hooks/            # Global custom hooks
│   └── ...
├── pages/            # Page components (Route pages)
│   ├── Dashboard/    # Dashboard page
│   │   └── hooks/    # Dashboard-specific hooks
│   ├── Graph/        # Graph/Analytics page
│   ├── Home/         # Home page
│   ├── MyTasks/      # My Tasks page
│   ├── Settings/     # Settings page
│   └── Team/         # Team page
├── routers/          # Route definitions
├── types/            # TypeScript type definitions
│   ├── home/         # Home-related types
│   ├── task/         # Task-related types
│   └── user/         # User-related types
├── utils/            # Helper/Utility functions
└── App.tsx, main.tsx, index.css
```

## 📝 Code Style & Naming Conventions

### TypeScript & General Rules
- ✅ **ใช้ TypeScript ทั้งหมด** - ไม่มี `.js` files
- ✅ **Import `type` keyword** สำหรับ type definitions: `import type { Task } from '@/types/task/Task'`
- ✅ **Props interface naming**: `{ComponentName}Props`
- ❌ **ไม่ใช้ `any` type**

### Naming Conventions

#### Components
- **PascalCase** สำหรับชื่อ components: `MyButton`, `TaskCard`, `UserProfile`
- **Folder structure**: ใช้ PascalCase ด้วย `components/TaskCard/index.tsx`
- **Main export**: ใช้ `index.tsx` แล้ว export component default

#### Functions & Variables
- **camelCase** สำหรับ functions: `handleClick()`, `calculateTotal()`
- **camelCase** สำหรับ variables: `userName`, `taskList`
- **UPPER_SNAKE_CASE** สำหรับ constants: `TASK_STATUS`, `API_KEY`

#### Files & Folders
- **Components**: PascalCase `MyComponent/index.tsx`
- **Hooks**: camelCase `useTaskList.ts`
- **Utils/Constants**: camelCase `theme.ts`, `dashboard-menu.tsx`
- **Types**: PascalCase `Task.ts`, `TaskStatus.ts`

### Component Structure

```tsx
import type { ComponentNameProps } from '@/types/...'

interface ComponentNameProps {
  // Props definition
}

/**
 * Brief description of component
 * @param props - The component props
 */
function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  return (
    <div>
      {/* Component JSX */}
    </div>
  )
}

export default ComponentName
```

### Styling
- ✅ **Tailwind CSS** สำหรับ styling หลัก
- ✅ **Ant Design** สำหรับ complex components
- ✅ **Theme constants** จาก `src/constants/theme/theme.ts`
- ❌ ไม่ใช้ inline styles มากเกินไป
- ❌ **ห้าม hardcode colors** - ใช้ theme constants แทน

Example:
```tsx
// ✅ Good
import { theme } from '@/constants/theme/theme'

<div style={{ color: theme.colors.textPrimary }}>
  Content
</div>

// ❌ Avoid
<div style={{ 
  display: 'flex', 
  gap: '16px',
  color: '#1f69d7',  // Hardcode color
  backgroundColor: '#ffffff'  // Hardcode color
}}>
```

### Logic Organization
- **ไม่ใช้ large logic ในเดียว component** - แยกออกเป็น hooks หรือ util functions
- **Custom hooks** สำหรับ state logic: `useTaskFilter.ts`, `usePagination.ts`
- **Utils** สำหรับ helper functions: `utils/formatDate.ts`

## 📌 Type Definitions

ใช้ path alias `@/` เมื่อ import:
```tsx
// ✅ Good
import type { Task } from '@/types/task/Task'
import { TaskCard } from '@/components/Dashboard/Task/TaskCard'

// ❌ Avoid
import type { Task } from '../../../types/task/Task'
```

### Common Types Location
- `types/task/` - Task, TaskStatus, TaskPriority
- `types/user/` - User information
- `types/home/` - Home page types

## 🎣 Hooks Guidelines

- ใช้ `use` prefix: `usePagination`, `useTaskFilter`
- ก็ว่าใน `pages/{PageName}/hooks/` หรือ `components/{ComponentName}/hooks/`
- Return object ควรมี TypeScript interface

```tsx
interface UseTasksReturn {
  tasks: Task[]
  isLoading: boolean
  loadTasks: () => Promise<void>
}

function useTasks(): UseTasksReturn {
  // implementation
}
```

## ✅ Testing and Validation

ก่อนส่งงานต้องตรวจสอบให้ผ่าน:
```bash
npm run lint              # TypeScript + ESLint
npm run build             # Build success
# ตรวจสอบจาก browser dev tools ว่าไม่มี console errors
```

**Required:**
- ❌ ไม่มี TypeScript errors
- ❌ ไม่มี ESLint warnings
- ❌ ไม่มี console errors
- ✅ Component render ถูกต้อง

## 🚫 Boundaries & Rules

- ❌ **ห้ามลบไฟล์สำคัญ** โดยไม่แจ้งก่อน (tsconfig, vite.config, package.json)
- ❌ **ห้าม modify types** ที่มีความสำคัญ โดยไม่คิดถึง impact
- ❌ **ห้าม hardcode values** ใช้ constants/config แทน
- ❌ **ห้าม hardcode colors** ใช้ theme constants จาก `src/constants/theme/theme.ts` แทน
- ⚠️ ถ้าไม่แน่ใจ ให้ถาม หรือ propose plan ก่อนทำการแก้ไข
- ✅ **ทำการบันทึก progress** ก่อนทำการ major changes

## 📝 Important Changes & Updates

**การแก้ไขที่สำคัญต้องอัปเดต AGENTS.md:**
- เพิ่ม/ลบ folder หรือ file structure
- เปลี่ยน naming conventions
- เพิ่ม global hooks หรือ utils
- เปลี่ยนแปลง styling approach
- เพิ่ม technology stack ใหม่
- ปรับแก้ code style guidelines

⚠️ **หลังจากแก้ไขเสร็จ ต้องอัปเดต AGENTS.md เพื่อให้เอกสารอยู่ในสภาพปัจจุบันเสมอ**

## 🎯 Best Practices

1. **ใช้ composition over inheritance** - React components
2. **Keep components small** - ใหญ่ไม่เกิน 200 lines
3. **Extract repeated logic** - ไปไว้ใน hooks หรือ utils
4. **Use constants** - แทนที่ magic numbers
5. **Error handling** - implement try-catch สำหรับ async operations
6. **Accessibility** - ใช้ semantic HTML, proper ARIA labels
7. **Performance** - use `memo`, `useMemo`, `useCallback` เมื่อจำเป็น