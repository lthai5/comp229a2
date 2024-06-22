import {defineConfig} from 'vite';
import react from "@vitejs/plugin-react";

export default defineConfig({
    root: './',
    base: './',
    plugins: [react()],
    build: {
        outDir: '../dist',

    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
            }
        }
    }
})