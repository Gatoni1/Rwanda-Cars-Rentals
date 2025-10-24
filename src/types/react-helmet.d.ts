// Lightweight module declaration for `react-helmet` to satisfy TypeScript in this repo.
// This provides minimal types used by our `SEO` component (Helmet props and component).
import * as React from 'react'

declare module 'react-helmet' {
    export interface HelmetProps extends React.HTMLAttributes<HTMLElement> {
        title?: string
        defaultTitle?: string
        encodeSpecialCharacters?: boolean
        onChangeClientState?: (newState: any) => void
        [key: string]: any
    }

    export const Helmet: React.ComponentType<HelmetProps>
    export default Helmet
}
