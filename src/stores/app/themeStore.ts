import { create } from 'zustand'
import { theme } from '@/constants/theme/theme'

export type ThemeKey = keyof typeof theme

type ThemeStore = {
    themeKey: ThemeKey
    theme: {
        colors: typeof theme[ThemeKey]
    }
    setTheme: (key: ThemeKey) => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
    themeKey: 'light',
    theme: {
        colors: theme.light
    },

    setTheme: (key) =>
        set({
            themeKey: key,
            theme: {
                colors: theme[key]
            }
        }),
}))