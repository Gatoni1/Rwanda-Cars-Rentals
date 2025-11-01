// Lightweight module declaration for `react-helmet-async` to satisfy TypeScript in this repo.
// This provides minimal types used by our `SEO` component (Helmet props and component).
import * as React from 'react'

// Module declaration for react-helmet-async
declare module 'react-helmet-async' {
  export interface HelmetProps extends React.HTMLAttributes<HTMLElement> {
    title?: string;
    meta?: Array<{ name?: string; property?: string; content?: string; }>;
    link?: Array<{ rel?: string; href?: string; }>;
    script?: Array<{ src?: string; type?: string; }>;
    children?: React.ReactNode;
  }

  export const Helmet: React.ComponentType<HelmetProps>
  export const HelmetProvider: React.ComponentType<{ children?: React.ReactNode }>
  export default Helmet
}
