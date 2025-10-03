// ...existing code

type Props = {
  value: string
  onChange: (v: string) => void
}

export default function Editor({ value, onChange }: Props) {
  return (
    <div className="editor-area">
        <div className="preview-toolbar">
        <strong>Editor</strong>
      </div>
      <textarea className="md-textarea" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Write your markdown here..." />
    </div>
  )
}
