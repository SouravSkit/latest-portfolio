import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
    // Allow access via Cloudflare quick-tunnel public hostnames (e.g. *.trycloudflare.com)
    allowedHosts: true,
  },
  preview: {
    // Same relaxation for `vite preview` when served through a tunnel
    allowedHosts: true,
  },
  build: {
    sourcemap: false,
  },
});
