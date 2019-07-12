import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import { eslint } from 'rollup-plugin-eslint'

const plugins = [
  json(),
  resolve(),
  commonjs(),
  eslint({
    throwOnError: true,
    throwOnWarning: true,
    include: ['src/**'],
    exclude: ['node_modules/**']
  }),
  babel({
    runtimeHelpers: true,
    exclude: 'mode_modules/**' // 不编译mode_modules文件夹下的代码
  })
]

export default [
  {
    input: 'src/usually.js',
    output: {
      name: 'U',
      file: 'dist/usually.js',
      format: 'umd'
    },
    plugins: plugins
  },
  {
    input: 'src/usually.js',
    output: {
      name: 'U',
      file: 'dist/usually.min.js',
      format: 'umd'
    },
    plugins: [
      ...plugins,
      uglify()
    ]
  }
]