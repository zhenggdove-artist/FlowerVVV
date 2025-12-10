import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const projectRoot = process.cwd();
const srcRoot = path.resolve(projectRoot, 'src');

export default defineConfig(() => ({
  root: srcRoot,
  base: './',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  envDir: projectRoot,
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': srcRoot,
    },
  },
}));
