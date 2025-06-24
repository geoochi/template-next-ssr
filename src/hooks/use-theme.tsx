'use client'
import { useState, useEffect } from 'react'

function useTheme() {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    setTheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    )
  }, [])

  useEffect(() => {
    if (!theme) return
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return {
    theme,
    setTheme,
  }
}

export default useTheme
