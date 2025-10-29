/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_GA_MEASUREMENT_ID?: string
  readonly VITE_SENTRY_DSN?: string
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}