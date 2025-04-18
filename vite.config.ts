import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';
import {visualizer} from 'rollup-plugin-visualizer';
import eslint from 'vite-plugin-eslint';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);

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
    ],
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['legacy-js-api'],
                implementation: require('sass-embedded'),
                sassOptions: {
                    outputStyle: 'compressed',
                    sourceMap: true,
                },
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
