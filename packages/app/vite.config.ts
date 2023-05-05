import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({

    build: {
        lib: {
            entry: resolve(__dirname, 'index.tsx'), // entry file of the library
            name: 'hikuro', // name of the library
            fileName: (format) => `index.${format}.jsx`, // file name of the output bundle
        },
        rollupOptions: {
            // make sure to externalize dependencies
            external: ['react'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'React',
                },
            },
        },
    },
    plugins: [react()],
});
