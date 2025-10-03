# MDViewer

A small, client-side Markdown editor + viewer built with React and TypeScript.

MDViewer lets you open, edit, preview and save Markdown files entirely in the browser. It uses the File System Access API when available and falls back to standard file input/download for broad compatibility. The preview renders GitHub-flavored Markdown (tables, task lists, fenced code blocks) and includes a GitHub-like table style for PR/issue templates.

## Quick features
- Live editor + preview (split view, responsive stacking on small screens)
- Dark / Light mode with a persistent toggle
- Open local `.md` or `.txt` files (File System Access API or fallback input)
- Save as Markdown (.md) or Export to HTML (.html)
- Keyboard shortcuts: Ctrl/Cmd+S to save, Ctrl/Cmd+O to open, Ctrl/Cmd+B to toggle dark
- Version history (local snapshots) and simple autosave to `localStorage`
- GitHub-flavored Markdown rendering via `react-markdown` + `remark-gfm`

## Installation (local development)
Clone the repo and install dependencies, then run the dev server:

```powershell
git clone <your-repo-url>
cd "E:\New projects\MardownViewer\MdFileViewer"
npm install
npm run dev
# MDViewer

A small, client-side Markdown editor + viewer built with React and TypeScript.

Live demo: https://mdviewer-app.vercel.app/

MDViewer lets you open, edit, preview and save Markdown files entirely in the browser. It uses the File System Access API when available and falls back to standard file input/download for broad compatibility. The preview renders GitHub-flavored Markdown (tables, task lists, fenced code blocks) and includes a GitHub-like table style suitable for PR/issue templates.

## Quick features
- Live editor + preview (split view, responsive stacking on small screens)
- Dark / Light mode with a persistent toggle
- Open local `.md` or `.txt` files (File System Access API or fallback input)
- Save as Markdown (.md) or Export to HTML (.html)
- Keyboard shortcuts: Ctrl/Cmd+S to save, Ctrl/Cmd+O to open, Ctrl/Cmd+B to toggle dark
- Version history (local snapshots) and simple autosave to `localStorage`
- GitHub-flavored Markdown rendering via `react-markdown` + `remark-gfm`

## Installation (local development)
Clone the repo and install dependencies, then run the dev server:

```powershell
git clone <your-repo-url>
cd "E:\New projects\MardownViewer\MdFileViewer"
npm install
npm run dev
```

Open the Vite dev URL (usually `http://localhost:5173`) to view the app.

To build a production bundle:

```powershell
npm run build
npm run preview   # preview the built site locally
```

Built files are emitted to the `dist/` directory and can be deployed to any static host.

## How to use
- Use the navbar to Open files, Swap editor/preview positions, toggle Dark mode, and quick Save / Export icons.
- Edit Markdown on the left (or bottom on mobile). The preview updates live on the right (or top on mobile).
- Click the Save icon in the navbar to save changes back to the original file (if allowed) or download a `.md` file. Use Export → HTML to download an `.html` version.

## Development notes
- Stack: Vite + React + TypeScript
- Key libraries: `react-markdown`, `remark-gfm`, `marked` (HTML export)
- The app is intentionally client-only; no server-side code is required.

## Hosting
This project is deployed to Vercel at the following URL:

- Live demo: https://mdviewer-app.vercel.app/

You can also host the generated `dist/` folder on any static host. Common choices:
- Vercel: connect the repo and use `npm run build` (Output dir: `dist`).
- Netlify: drag-and-drop the `dist/` folder or connect via Git with `npm run build`.
- GitHub Pages: set Vite `base` if your site is served under a repo path and deploy `dist/` (via `gh-pages` or GitHub Actions).

See the project notes in the repository for more detailed deploy commands and tips (SPA fallback, custom domain, CDN cache invalidation).

## Contributing
PRs and issues are welcome. If you add features, please include tests or a small demo and update this README.
