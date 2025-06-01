import * as path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import {visualizer} from 'rollup-plugin-visualizer';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';
import {viteStaticCopy} from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslint(),
        react({
            plugins: [[
                '@swc/plugin-styled-components', {
                    'displayName': true,
                    'ssr': false
                }
            ]],
        }),
        dts({
            insertTypesEntry: true,
        }),
        visualizer() as Plugin,
        viteStaticCopy({
            targets: [
                {
                    src: 'src/styles.scss',
                    dest: '.' // 複製到 dist 根目錄
                }
            ]
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['legacy-js-api'],
                outputStyle: 'compressed',
            },
        },
    },
    build: {
        sourcemap: process.env.NODE_ENV !== 'production',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: (format) => `acrool-react-grid.${format}.js`,
        },
        cssTarget: 'chrome61',
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled'
                },
            },
        },
    },
});
