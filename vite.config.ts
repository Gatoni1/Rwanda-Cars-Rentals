import { defineConfig } from 'vite'
import path from 'path'

// Use dynamic import for ESM-only plugins to avoid require() loading issues in some
// Node environments / bundlers (esbuild). This ensures the plugin is imported as ESM.
export default defineConfig(async () => {
    const react = (await import('@vitejs/plugin-react')).default

    return {
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    }
})
