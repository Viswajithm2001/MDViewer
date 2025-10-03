import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import { useVersionHistory } from './hooks/useVersionHistory'
import { marked } from 'marked'

export default function App() {
  const [value, setValue] = useState<string>('# Welcome\n\nStart editing...')
  const [dark, setDark] = useState<boolean>(false)
  const [swapped, setSwapped] = useState<boolean>(false)
  const [fileHandle, setFileHandle] = useState<any>(null)
  const { add: addHistory } = useVersionHistory()

  const converter = useMemo(() => marked, [])

  // keyboard shortcuts
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault()
        saveFile()
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'o') {
        e.preventDefault()
        openFile()
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault()
        setDark((d) => !d)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [value])

  // File system access API helpers with fallbacks
  const supportsFileSystem = typeof (window as any).showOpenFilePicker === 'function'

  const openFile = useCallback(async () => {
    try {
  if (supportsFileSystem) {
        // @ts-ignore
        const [handle] = await (window as any).showOpenFilePicker({ types: [{ description: 'Markdown', accept: { 'text/markdown': ['.md', '.markdown'], 'text/plain': ['.txt'] } }], multiple: false })
  const file = await handle.getFile()
  const text = await file.text()
        setValue(text)
        setFileHandle(handle)
        addHistory(text)
      } else {
        // fallback: input element
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = '.md,.markdown,.txt'
        input.onchange = async () => {
          const f = input.files && input.files[0]
          if (!f) return
          const text = await f.text()
          setValue(text)
          addHistory(text)
        }
        input.click()
      }
    } catch (err) {
      console.error('openFile error', err)
      alert('Failed to open file: ' + (err as Error).message)
    }
  }, [addHistory, supportsFileSystem])

  const saveFile = useCallback(async (asHtml = false) => {
    try {
  const content = asHtml ? converter.parse(value) : value
      if (supportsFileSystem && fileHandle) {
        // @ts-ignore
        const writable = await fileHandle.createWritable()
        await writable.write(content)
        await writable.close()
        addHistory(value)
        alert('Saved')
        return
      }

      // fallback: create blob and download
  const blob = new Blob([content], { type: asHtml ? 'text/html' : 'text/markdown' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = asHtml ? 'document.html' : 'document.md'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      addHistory(value)
    } catch (err) {
      console.error('saveFile', err)
      alert('Failed to save file: ' + (err as Error).message)
    }
  }, [converter, fileHandle, supportsFileSystem, value, addHistory])

  // Quick export to HTML file is saveFile(true) called directly when needed

  // auto-save to localStorage (simple recovery)
  useEffect(() => {
    try {
      localStorage.setItem('mdviewer.autosave', value)
    } catch {}
  }, [value])

  // recover if file empty
  useEffect(() => {
    try {
      const recovered = localStorage.getItem('mdviewer.autosave')
      if (recovered && recovered.length > 0) {
        // don't clobber existing default on first load
        setValue(recovered)
      }
    } catch {}
  }, [])

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <Navbar onOpen={openFile} onSwapSides={() => setSwapped((s) => !s)} dark={dark} onToggleDark={() => setDark((d) => !d)} onSave={saveFile} />

      <main className={"main" + (swapped ? ' reverse' : '')}>
        <Editor value={value} onChange={setValue} />
        <Preview value={value} />
      </main>
    </div>
  )
}
