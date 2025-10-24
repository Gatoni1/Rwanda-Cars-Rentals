// Lightweight module declarations to help editors/TS resolve aliases and ESM runtime
// These are intentionally permissive to avoid editor "cannot find module" diagnostics.

declare module '@/*'

declare module 'react'
declare module 'react-dom'
declare module 'react-router-dom'
declare module 'react/jsx-runtime'

export { }
