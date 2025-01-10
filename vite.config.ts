import { resolve as pathResolve } from 'path';
import { defineConfig } from 'vite';
import { BASE_PATH } from './src/constants';

const resolve = (path: string) => pathResolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_PATH,
  build: {
    rollupOptions: {
      // index for dev
      // 404 for gh-pages
      input: ['404.html', 'index.html'],
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
});
