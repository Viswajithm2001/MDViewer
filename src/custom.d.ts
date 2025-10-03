declare module 'react-mde'
declare module 'showdown'
declare module 'react-markdown'
declare module 'remark-gfm'
declare module 'marked'

declare global {
  interface Window {
    showOpenFilePicker?: any
  }
}

// minimal JSX namespace for TS until lib dom/jsx are configured
declare namespace JSX {
  interface IntrinsicAttributes { }
  interface IntrinsicClassAttributes<T> { }
  interface IntrinsicElements { [elemName: string]: any }
}
