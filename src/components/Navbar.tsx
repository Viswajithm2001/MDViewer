type Props = {
  onOpen: () => void
  onSwapSides?: () => void
  dark?: boolean
  onToggleDark?: () => void
  onSave?: (asHtml?: boolean) => void
}

export default function Navbar({ onOpen, onSwapSides, dark = false, onToggleDark, onSave }: Props) {
  return (
    <header className="navbar">
      <div className="nav-top">
        <div className="nav-left">
          <h1 className="brand">MarkDown Viewer</h1>
        </div>

        <div className="nav-center">
          <button className="icon-button open-btn" onClick={onOpen} title="Open file">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 7l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 21H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="icon-label">Open MD</span>
          </button>

          <button className="icon-button swap-icon" onClick={() => onSwapSides && onSwapSides()} title="Swap editor/preview">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 4l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 14l-3 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="icon-label">Swap</span>
          </button>
          {/* Save and Export moved next to swap for quick access */}
          <button className="icon-button center-action" onClick={() => onSave && onSave(false)} title="Save markdown">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 21v-8H7v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="icon-label">Save as MD</span>
          </button>
          <button className="icon-button center-action" onClick={() => onSave && onSave(true)} title="Export to HTML">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* export icon: arrow leaving box */}
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 10l5-5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="icon-label">Export to HTML</span>
          </button>
        </div>

        <div className="nav-right" />
        <div className="nav-right">
          <label className="switch">
            <input type="checkbox" checked={dark} onChange={() => onToggleDark && onToggleDark()} />
            <span className="slider">
              <span className="label label-on">Dark</span>
              <span className="label label-off">Light</span>
            </span>
          </label>
        </div>
      </div>
    </header>
  )
}
