import path from 'path';

import { defineConfig, loadEnv, ProxyOptions } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const proxy: Record<string, string | ProxyOptions> = {};

export default function getConfig({ mode }: { mode: string }) {
  const loadedEnv = loadEnv(mode, process.cwd());
  process.env = { ...process.env, ...loadedEnv };

  const apiPath = process.env.VITE_APP_API_PATH;
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
      configure: (_proxy) => {
        // proxy.on('error', (err, _req, _res) => {
        //   console.log('proxy error', err);
        // });
        // proxy.on('proxyReq', (proxyReq, req, _res) => {
        //   console.log('Sending Request to the Target:', req.method, req.url);
        // });
        // proxy.on('proxyRes', (proxyRes, req, _res) => {
        //   console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
        // });
      },
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
      CONFIG: { ...loadedEnv, APP_VERSION: JSON.stringify(process.env.npm_package_version) },
    },
    plugins: [react(), tsconfigPaths()],
    server: {
      port: Number(process.env.VITE_APP_PORT) || 5173,
      host: 'localhost',
      cors: false,
      proxy,
    },
  });
}
