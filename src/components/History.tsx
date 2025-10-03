// ...existing code
import type { HistoryEntry } from '../hooks/useVersionHistory'

type Props = {
  history: HistoryEntry[]
  onLoad: (h: HistoryEntry) => void
  onSnapshot: () => void
  onClear: () => void
}

export default function History({ history, onLoad, onSnapshot, onClear }: Props) {
  function formatTimestamp(ts: number) {
    return new Date(ts).toLocaleString()
  }

  return (
    <div className="history">
      <h3>Version History</h3>
      <button className="small" onClick={onSnapshot}>Snapshot</button>
      <button className="small" onClick={onClear}>Clear</button>
      <ul>
        {history.length === 0 && <li className="muted">No history yet</li>}
        {history.map((h) => (
          <li key={h.id}>
            <div className="hist-item">
              <div>
                <div className="hist-time">{formatTimestamp(h.timestamp)}</div>
                <button className="small" onClick={() => onLoad(h)}>Load</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
