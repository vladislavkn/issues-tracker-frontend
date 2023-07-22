/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_KEY: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
