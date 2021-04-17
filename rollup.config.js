import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'test/index.js',
  output: {
    file: 'test/bundle.js',
    format: 'iife'
  },
  plugins: [nodeResolve(), commonjs(), serve('test'), livereload()]
};