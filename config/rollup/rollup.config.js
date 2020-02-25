import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import {terser} from 'rollup-plugin-terser';

import Styles from '../../packages/styles/package.json';
import Core from '../../packages/core/package.json';

const getConfiguration = (pkg, env, target) => {
  const isProduction = env === 'production';
  const isModule = target === 'module';

  const packageName = pkg.name.replace(/@emblem-ui\//, '');

  const input = `packages/${packageName}/src/index.ts`;
  const dependencies = []
    .concat(pkg.dependencies ? Object.keys(pkg.dependencies) : [])
    .concat(pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : []);

  const plugins = [
    resolve({browser: true}),
    typescript({
      abortOnError: false,
      tsconfig: `./packages/${packageName}/tsconfig.json`,
      clean: true
    }),
    json(),
    replace({'process.env.NODE_ENV': JSON.stringify(env)}),
    builtins(),
    babel({
      runtimeHelpers: true,
      include: [`packages/${packageName}/src/**`],
      extensions: ['.js', '.ts'],
      presets: [
        '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            exclude: [
              '@babel/plugin-transform-regenerator',
              '@babel/transform-async-to-generator'
            ],
            modules: false,
            targets: {esmodules: true}
          }
        ],
        '@babel/preset-react'
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {regenerator: false, useESModules: true}
        ],
        '@babel/plugin-proposal-class-properties',
        'babel-plugin-styled-components'
      ]
    }),
    globals(),
    isProduction && terser()
  ].filter(Boolean);

  if (isModule) {
    return {
      plugins,
      input,
      output: [
        {
          file: `packages/${packageName}/${pkg.module}`,
          format: 'es',
          sourcemap: true
        },
        {
          file: `packages/${packageName}/${pkg.main}`,
          format: 'cjs',
          exports: 'named',
          sourcemap: true
        }
      ],
      external: id => {
        return !!dependencies.find(
          dependency => dependency === id || id.startsWith(`${dependency}/`)
        );
      }
    };
  }
};

const createConfiguration = pkg => {
  const isProduction = process.env.NODE_ENV === 'production';
  return [
    getConfiguration(pkg, 'development', 'module'),
    isProduction && getConfiguration(pkg, 'development', 'umd'),
    isProduction && getConfiguration(pkg, 'production', 'umd')
  ].filter(Boolean);
};

export default [
  ...createConfiguration(Styles),
  ...createConfiguration(Core),
];
