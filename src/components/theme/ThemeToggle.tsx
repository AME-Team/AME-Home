'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'app_settings'
const MODES: ThemeMode[] = ['light', 'dark', 'system']

interface ThemeLabels {
  light: string
  dark: string
  system: string
}

function isThemeMode(value: unknown): value is ThemeMode {
  return value === 'light' || value === 'dark' || value === 'system'
}

function readMode(): ThemeMode {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw === null) return 'system'
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed === 'object' && parsed !== null && 'themeMode' in parsed) {
      if (isThemeMode(parsed.themeMode)) return parsed.themeMode
    }
  } catch {
    // 保存値が読めない場合はシステム設定に従う
  }
  return 'system'
}

function applyTheme(mode: ThemeMode): void {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = mode === 'dark' || (mode === 'system' && prefersDark)
  document.documentElement.classList.toggle('dark', isDark)
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
}

function saveMode(mode: ThemeMode): void {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed: unknown = raw === null ? {} : JSON.parse(raw)
    const settings: Record<string, unknown> =
      typeof parsed === 'object' && parsed !== null ? { ...parsed } : {}
    settings.themeMode = mode
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  } catch {
    // 保存できない環境ではセッション内の表示だけ切り替える
  }
}

export default function ThemeToggle({ labels }: { labels: ThemeLabels }): React.ReactNode {
  const [mode, setMode] = useState<ThemeMode>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMode(readMode())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    applyTheme(mode)
    saveMode(mode)

    if (mode !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (): void => {
      applyTheme('system')
    }
    media.addEventListener('change', onChange)
    return () => {
      media.removeEventListener('change', onChange)
    }
  }, [mode, mounted])

  const Icon = mode === 'light' ? Sun : mode === 'dark' ? Moon : Monitor
  const label = labels[mode]
  const nextMode = MODES[(MODES.indexOf(mode) + 1) % MODES.length]

  return (
    <button
      type="button"
      onClick={() => {
        setMode(nextMode)
      }}
      aria-label={label}
      title={label}
      className="inline-flex size-10 items-center justify-center rounded-md text-gray-600 transition-colors duration-150 ease-out hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
    >
      <Icon className="size-5" aria-hidden="true" />
    </button>
  )
}
