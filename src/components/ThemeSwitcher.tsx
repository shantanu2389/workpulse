import { Moon, Palette, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export type ThemeName = 'pulse' | 'midnight'

const STORAGE_KEY = 'workpulse-theme'

/** A small, self-contained theme control for comparing brand palettes. */
export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof window === 'undefined') return 'pulse'
    return window.localStorage.getItem(STORAGE_KEY) === 'midnight' ? 'midnight' : 'pulse'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const switchTheme = () => {
    document.documentElement.classList.add('theme-changing')
    setTheme(isMidnight ? 'pulse' : 'midnight')
    window.setTimeout(() => document.documentElement.classList.remove('theme-changing'), 650)
  }

  const isMidnight = theme === 'midnight'
  return <button
    className="theme-switcher"
    type="button"
    aria-label={`Switch to ${isMidnight ? 'warm' : 'midnight'} colour mode`}
    title={`Switch to ${isMidnight ? 'warm' : 'midnight'} colour mode`}
    onClick={switchTheme}
  >
    <span className="theme-switcher-icon"><Palette size={15} /></span>
    <span className="theme-switcher-copy"><small>Colour mode</small><strong>{isMidnight ? 'Midnight' : 'Pulse'}</strong></span>
    <span className="theme-switcher-toggle">{isMidnight ? <Moon size={13} /> : <Sun size={13} />}</span>
  </button>
}
