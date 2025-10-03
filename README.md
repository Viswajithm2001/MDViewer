# MDViewer

MDViewer is a small, client-side Markdown editor and viewer built with React and TypeScript.

It allows you to open, edit, preview, and save Markdown files entirely in the browser. The app uses the File System Access API when available and falls back to standard file input/download for broad compatibility. The preview supports GitHub-flavored Markdown (tables, task lists, fenced code blocks) and includes a GitHub-like table style suitable for PR/issue templates.

Live demo: https://mdviewer-app.vercel.app/
## Screenshots

<img width="600" height="500" alt="image" src="https://github.com/user-attachments/assets/6b14a7fb-98e3-45c6-baab-f251a44c8f9d" />
<img width="600" height="500" alt="image" src="https://github.com/user-attachments/assets/aa354b70-34e0-48cc-9e42-eaaca74ffb9a" />


## Features

- Live editor + preview (split view, responsive stacking on small screens)
- Dark / Light mode with persistent toggle
- Open local `.md` or `.txt` files (File System Access API or fallback input)
- Save as Markdown (.md) or export to HTML (.html)
- Keyboard shortcuts:
  - Ctrl/Cmd + S → Save
  - Ctrl/Cmd + O → Open
  - Ctrl/Cmd + B → Toggle dark mode
- Version history via local snapshots, simple autosave to `localStorage`
- GitHub-flavored Markdown rendering via `react-markdown` + `remark-gfm`

## Installation (Local Development)

Clone the repository and install dependencies:

git clone https://github.com/Viswajithm2001/MDViewer.git
cd MDViewer
npm install
npm run dev

Open the development URL (usually http://localhost:5173) to view the app.

### Build for Production

npm run build
npm run preview   # preview the built site locally

Built files are emitted to the `dist/` directory and can be deployed to any static host.

## How to Use

- Use the navbar to open files, swap editor/preview positions, toggle Dark mode, and use quick Save/Export icons.
- Edit Markdown on the left (or bottom on mobile). The preview updates live on the right (or top on mobile).
- Click the Save icon in the navbar to save changes back to the original file (if allowed) or download a `.md` file. Use Export → HTML to download an `.html` version.

## Development Notes

- Stack: Vite + React + TypeScript
- Key libraries: react-markdown, remark-gfm, marked (HTML export)
- The app is intentionally client-only; no server-side code is required.

## Hosting

This project is deployed to Vercel:

You can also host the generated `dist/` folder on any static host:
- Vercel: connect the repo and use `npm run build` (Output dir: `dist`)
- Netlify: drag-and-drop the `dist/` folder or connect via Git with `npm run build`
- GitHub Pages: set Vite `base` if your site is served under a repo path and deploy `dist/` (via gh-pages or GitHub Actions)

