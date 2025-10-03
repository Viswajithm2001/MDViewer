import { useCallback, useEffect, useState } from 'react'

export type HistoryEntry = {
  id: string
  content: string
  timestamp: number
}

const HISTORY_KEY = 'mdviewer.history'

export function useVersionHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    try {
      const raw = localStorage.getItem(HISTORY_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
    } catch {}
  }, [history])

  const add = useCallback((content: string) => {
    const entry: HistoryEntry = { id: String(Date.now()), content, timestamp: Date.now() }
    setHistory((h) => [entry, ...h].slice(0, 50))
  }, [])

  const clear = useCallback(() => setHistory([]), [])

  return { history, add, clear }
}
