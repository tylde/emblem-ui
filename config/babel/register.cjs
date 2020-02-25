require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  inputSourceMap: true,
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', {targets: {node: '10'}}],
    '@babel/preset-react'
  ]
});
