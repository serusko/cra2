import path from 'path';

import { defineConfig, loadEnv, ProxyOptions } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const proxy: Record<string, string | ProxyOptions> = {};

export default function getConfig({ mode }: { mode: string }) {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const apiPath = process.env.VITE_API_PATH;
  const target = process.env.VITE_API_PROXY;

  if (apiPath && target) {
    const url = new URL(target);
    proxy[apiPath] = {
      autoRewrite: true,
      bypass: (req) => {
        req.headers.origin = url.origin;
      },
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp(`^${apiPath}`), ''),
      target,
    };
  }

  return defineConfig({
    build: {
      outDir: path.resolve(__dirname, 'dist'),
      sourcemap: true,
    },
    css: {
      postcss: {
        plugins: [tailwind, autoprefixer],
      },
    },
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    plugins: [react(), tsconfigPaths()],
    server: {
      port: Number(process.env.VITE_APP_PORT) || 5173,
    },
  });
}
