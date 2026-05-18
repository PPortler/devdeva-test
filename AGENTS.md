# AGENTS.md

## Project Overview
เว็บสำหรับการทดสอบ แบ่งเป็น 2 Task:
- Dashboard (Task Management)
- Graph (Chart + PDF Export)

**Tech Stack**
React 18 • TypeScript • Tailwind CSS • Ant Design • Vite • Zustand • Recharts • html2canvas • jsPDF

**Main Pages**
Dashboard • Graph • Home

---

## Commands

```bash
npm install      # install dependencies
npm run dev      # run dev server (http://localhost:5173)
npm run build    # build production
npm run lint     # run ESLint
npm run preview  # preview production build
```

## Project Structure

```
src/
├── assets/        # static files
├── components/    # reusable components
├── constants/     # configs & constants
├── hooks/         # global hooks
├── pages/         # route pages
├── routers/       # route config
├── stores/        # Zustand store
│   ├── app/
│   └── dashboard/
├── types/         # TypeScript types
├── utils/         # helper functions
├── App.tsx
├── main.tsx
└── index.css
```

## 📝 Code Style & Naming Conventions

### TypeScript & General Rules
- ✅ **ใช้ TypeScript ทั้งหมด** - ไม่มี `.js` files
- ✅ **Import `type` keyword** สำหรับ type definitions: `import type { Task } from '@/types/task/Task'`
- ✅ **Props type naming**: `{ComponentName}Props`
- ✅ **ใช้ path aliases** `@/` สำหรับ imports
- ✅ **Export types** from type files แล้ว import ที่อื่น
- ❌ **ไม่ใช้ `any` type**
- ❌ **ไม่ hardcode values** - ใช้ constants จาก `/constants`

### Naming Conventions

#### Components
- **PascalCase** สำหรับชื่อ components: `TaskCard`, `LineCharts`, `ThemeDropdown`
- **Folder structure**: ใช้ PascalCase `components/TaskCard/index.tsx`
- **Main export**: ใช้ `index.tsx` แล้ว export component default

#### Functions & Variables
- **camelCase** สำหรับ functions: `handleSubmit()`, `calculateTotal()`
- **camelCase** สำหรับ variables: `userData`, `chartData`, `isLoading`
- **UPPER_SNAKE_CASE** สำหรับ constants: `TASK_STATUS`, `CHART_CONFIG`, `INITIAL_FORM`

#### Files & Folders
- **Components**: PascalCase `MyComponent/index.tsx`
- **Hooks**: camelCase `useTaskFilter.ts`, `useMockData.ts`, `useLoadInitialData.ts`
- **Utils**: camelCase `exportChartToPDF.ts`, `formatDate.ts`
- **Types**: PascalCase `Task.ts`, `ChartData.ts`
- **Stores**: camelCase `themeStore.ts`, `dashboardStore.ts`
- **Config**: camelCase `chart-config.ts`, `dashboard-menu.tsx`

### Component Structure

```tsx
import type { ComponentNameProps } from '@/types/...'

type ComponentNameProps = {
  // Props definition
}

function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  return (
    <div>
      {/* Component TSX */}
    </div>
  )
}

export default ComponentName
```

### Styling
- ✅ **Tailwind CSS** สำหรับ styling หลัก (responsive design, utilities)
- ✅ **Inline styles** สำหรับ dynamic values หรือ export compatibility (PDF, charts)
- ✅ **Ant Design** สำหรับ complex components (Modal, Dropdown, Input, etc.)
- ✅ **Theme constants** จาก `src/constants/theme/theme.ts`
- ❌ ไม่ใช้ CSS modules
- ❌ ห้าม hardcode colors - ใช้ theme constants แทน

Example:
```tsx
// ✅ Good - Inline styles for dynamic values
const { colors } = useThemeStore().theme
<div style={{ color: colors.textPrimary }}>
  Content
</div>

// ✅ Good - Tailwind for static styles
<button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
  Click me
</button>

// ❌ Avoid - Hardcoded colors
<div style={{ color: '#1f69d7' }}>
```

## 🎣 Hooks Guidelines

### Custom Hooks
- ใช้ `use` prefix: `usePagination`, `useTaskFilter`, `useLoadInitialData`
- ไว้ใน `pages/{PageName}/hooks/` หรือ `components/{ComponentName}/hooks/` ตามความเหมาะสม
- Return object ควรมี TypeScript type

```tsx
type UseTasksReturn = {
  tasks: Task[]
  isLoading: boolean
  loadTasks: () => Promise<void>
}

function useTasks(): UseTasksReturn {
  // implementation
}
```

### Page-Specific Hooks Pattern
- **useLoadInitialData**: โหลดข้อมูลเบื้องต้นจาก API/Mock (Dashboard, Graph)
- **useMockData**: Return mock API functions (getTasksData, getUsersData, getChartData, etc.)

### Global Hooks (in /hooks)
- **useThemeStore**: Theme state management (light/deva)
- **useDashboardStore**: Dashboard state (search, filters)
- **useDebounce**: Debounce input values for search/filter

## 🔄 State Management (Zustand)

### useThemeStore
```tsx
import { useThemeStore } from '@/stores/app/themeStore'

const { themeKey, setTheme, theme } = useThemeStore()
// theme.colors = { primary, textPrimary, sidebar, etc. }
```

### useDashboardStore
```tsx
import useDashboardStore from '@/stores/dashboard/useDashboardStore'

const { searchHeader, setSearchHeader } = useDashboardStore()
```

## 📊 Chart Component Pattern

LineCharts component รับ `data` prop แล้ว render multi-axis chart:

```tsx
import LineCharts from '@/components/Charts/LineCharts/LineCharts'
import type { LineChartData } from '@/types/chart/ChartData'

<LineCharts data={chartData} />
```

### Chart Data Flow
1. **Graph Page** → `useLoadInitialData()` hook
2. Hook → `useMockData().getChartData()` 
3. Mock data → State (`chartData`)
4. State → Pass to `<LineCharts data={chartData} />`

### Chart Config
Chart configuration อยู่ใน [src/components/Charts/LineCharts/chart-config.ts](src/components/Charts/LineCharts/chart-config.ts):
- Color definition สำหรับแต่ละ series
- Gradient IDs
- Y-axis domains
- Labels

## 📄 Export to PDF

Chart export to PDF ด้วย `html2canvas` + `jsPDF`:

```tsx
import { exportChartToPDF } from '@/utils/exportChartToPDF'

const result = await exportChartToPDF({
  element: chartRef.current,
  fileName: 'daily-graph.pdf'
})
```

**Features:**
- Scale 3x สำหรับ high quality rendering
- White background
- Landscape orientation
- Auto layout calculation
- Optimized for element cloning

## ✅ Testing & Validation

ก่อนส่งงานต้องตรวจสอบให้ผ่าน:

```bash
npm run build             # Build success (must pass)
npm run lint              # ESLint check (warnings ok)
# ตรวจสอบจาก browser dev tools ว่าไม่มี console errors
```

**Required:**
- ✅ `npm run build` ผ่าน (no TypeScript errors)
- ✅ Component render ถูกต้อง
- ✅ ไม่มี critical console errors

**Optional (warnings allowed):**
- ESLint warnings (Tailwind format, style tips)
- TypeScript deprecation warnings (already handled)

## 🚫 Boundaries & Rules

- ❌ **ห้ามลบไฟล์สำคัญ** - tsconfig, vite.config, package.json
- ❌ **ห้าม modify shared types** โดยไม่คิดถึง impact ต่อ components อื่น
- ❌ **ห้าม hardcode values** - ใช้ constants แทน
- ❌ **ห้าม hardcode colors** - ใช้ theme constants จาก `src/constants/theme/theme.ts`
- ❌ **ห้าม break existing features** - ตรวจสอบ UI ก่อน submit
- ⚠️ ถ้าไม่แน่ใจ - ถาม หรือ propose plan ก่อนทำการแก้ไข
- ✅ **ทำการบันทึก progress** - update AGENTS.md หลังจากทำ major changes

## 📝 Important Components & Features

### Recently Added (May 2026)
- **ThemeDropdown** - Theme selector component ด้วยวงกลมสี (Light blue #1f69d7, Deva red #c01820)
- **LineCharts** - Multi-axis chart component ด้วย Recharts (green, orange, blue series)
- **exportChartToPDF** - Export chart to PDF ด้วย html2canvas + jsPDF
- **useLoadInitialData** (Graph page) - Load chart data with mock API pattern
- **themeStore** - Global theme state management (Zustand)
- **useMockData** (Graph page) - Mock chart data API

### Core Features
- ✅ Task management (create, edit, delete, filter)
- ✅ Task status grouping (Todo, Doing, Done)
- ✅ Task priority filtering (Low, Medium, High)
- ✅ Search & debounce functionality
- ✅ Real-time analytics dashboard
- ✅ Multi-axis chart visualization
- ✅ PDF export functionality
- ✅ Theme switching (Light/Deva)
- ✅ Responsive design
- ✅ User avatar & profile dropdown
- ✅ Notification system (UI ready)

## 🎯 Best Practices

1. **ใช้ composition over inheritance** - React functional components
2. **Keep components small** - ใหญ่ไม่เกิน 250 lines (ถ้ามากกว่านี้ให้แยกออก)
3. **Extract repeated logic** - ไปไว้ใน hooks หรือ utils
4. **Use constants** - แทนที่ magic numbers/strings/colors
5. **Error handling** - implement try-catch สำหรับ async operations
6. **Loading states** - ให้ user feedback ระหว่าง data loading
7. **Type safety** - export types จาก type files, หลีกเลี่ยง `any`
8. **Accessibility** - ใช้ semantic HTML, ARIA labels สำหรับ complex components
9. **Performance** - use `memo`, `useMemo`, `useCallback` เมื่อจำเป็น
10. **Code organization** - Related code ไว้เดียวกัน (component + types + hooks)

## 🔗 Dependencies

**Core Libraries:**
- `react` 18 - UI framework
- `typescript` - Type safety
- `tailwindcss` - Styling
- `antd` (Ant Design) - Component library
- `zustand` - State management (lightweight alternative to Redux)
- `react-router-dom` - Routing
- `recharts` - Chart library (multi-axis support)
- `html2canvas` - HTML to image conversion
- `jspdf` - PDF generation
- `lucide-react` - Icon library
- `dayjs` - Date/time manipulation

## 📌 Type Definitions Location

ใช้ path alias `@/` เมื่อ import:
```tsx
// ✅ Good
import type { Task } from '@/types/task/Task'
import type { LineChartData } from '@/types/chart/ChartData'
import { TaskCard } from '@/components/Dashboard/Task/TaskCard'
import { useThemeStore } from '@/stores/app/themeStore'

// ❌ Avoid
import type { Task } from '../../../types/task/Task'
import { TaskCard } from '../../../components/...'
```

## 📁 Key Files Reference

- **Configuration**: `tsconfig.json`, `vite.config.ts`, `tailwind.config.ts`
- **Theme Colors**: `src/constants/theme/theme.ts`
- **Dashboard Config**: `src/constants/dashboard/dashboard-menu.tsx`
- **Task Types**: `src/types/task/Task.ts`, `TaskStatus.ts`, `TaskPriority.ts`
- **Chart Config**: `src/components/Charts/LineCharts/chart-config.ts`

## 📝 Documentation Updates

**ต้องอัปเดต AGENTS.md เมื่อ:**
- ✅ เพิ่ม/ลบ folder หรือ file structure ใหญ่
- ✅ เปลี่ยน naming conventions พื้นฐาน
- ✅ เพิ่ม global hooks, stores, หรือ utils
- ✅ เปลี่ยน styling approach (CSS-in-JS, CSS modules, etc.)
- ✅ เพิ่ม dependency ใหม่ที่สำคัญ
- ✅ เปลี่ยน code patterns หรือ best practices
- ✅ เพิ่มหรือลบ page ใหญ่

⚠️ **หลังจากแก้ไขเสร็จ ต้องอัปเดต AGENTS.md เพื่อให้เอกสารอยู่ในสภาพปัจจุบันเสมอ**
