import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import Sitemap from 'vite-plugin-sitemap';
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        Sitemap({
            hostname: 'https://skyastrall.com',
            dynamicRoutes: ['/services', '/products', '/about'],
            generateRobotsTxt: true,
        }),
    ],
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
