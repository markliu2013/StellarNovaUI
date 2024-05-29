/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';
export default defineConfig({
  test: {
    environment: 'happy-dom'
  },
  build: {
    //minify: false,
    rollupOptions: {
      // Ignore files that don't need to be packaged.
      external: ['vue', /\.less/, '@stellarnovaui/utils'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          //Make the packaging directory correspond to our directory.
          preserveModules: true,
          exports: 'named',
          dir: '../stellarnovaui/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: '../stellarnovaui/lib'
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'stellarnovaui'
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      outputDir: ['../stellarnovaui/es/src', '../stellarnovaui/lib/src'],
      //Specify the tsconfig.json to be used is under our entire project root directory.
      //If not configured, you can also create a new tsconfig.json under the components directory.
      tsConfigFilePath: '../../tsconfig.json'
    }),
    DefineOptions(),
    {
      name: 'style',
      generateBundle(config, bundle) {
        //Here you can get the directory of the packaged files and the code.
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //Rollup's built-in method, replace all .less in the output file code with .css,
          //because we did not package less files at that time.
          this.emitFile({
            type: 'asset',
            fileName: key, //The filename unchanged.
            source: bundler.code.replace(/\.less/g, '.css')
          });
        }
      }
    }
  ]
});
