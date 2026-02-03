import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/Libreria-Garcia-Lorca/',
    build: {
        outDir: 'docs',
    },
    plugins: [react()],
});
