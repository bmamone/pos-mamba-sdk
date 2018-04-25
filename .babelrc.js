const { IS_PROD, IS_DEV, IS_TEST } = require('./tools/consts.js')

const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: false,
      loose: true,
      /** Only parse modules if testing. If not, let webpack handle it */
      modules: IS_TEST ? 'commonjs' : false,
      debug: IS_DEV,
      forceAllTransforms: true,
    },
  ],
  ['@babel/preset-stage-0', { loose: true }],
]

const plugins = ['@babel/plugin-proposal-decorators']

module.exports = {
  sourceMaps: true,
  presets,
  plugins,
}
