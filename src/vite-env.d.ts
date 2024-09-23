/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly MODE: 'development' | 'production';
  readonly PROD: boolean;
  readonly SSR: boolean;
  readonly VITE_API_PROXY: string;
  readonly VITE_APP_API_PATH: string;
  readonly VITE_APP_PORT: string;
  readonly VITE_APP_ENABLE_QUERY_DEV: string;
}
