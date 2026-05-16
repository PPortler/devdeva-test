import { create } from 'zustand'

type DashboardStore = {
  searchHeader: string
  setSearchHeader: (search: string) => void
  clearSearchHeader: () => void
}

const useDashboardStore =
  create<DashboardStore>((set) => ({
    searchHeader: '',

    setSearchHeader: (searchHeader) =>
      set({
        searchHeader,
      }),

    clearSearchHeader: () =>
      set({
        searchHeader: '',
      }),
  }))

export default useDashboardStore