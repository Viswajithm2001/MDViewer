// ...existing code
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  value: string
}

export default function Preview({ value }: Props) {

  return (
    <div className="preview-area">
      <div className="preview-toolbar">
        <strong>Preview</strong>
      </div>
      <div className="preview-content">
        <div className="preview-inner">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
        </div>
      </div>

      {/* Save buttons moved to global controls in App.tsx */}
    </div>
  )
}
