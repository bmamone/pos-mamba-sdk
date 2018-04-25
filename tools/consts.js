const { fromRoot } = require('./helpers/utils.js')

/** Defaults process.env.NODE_ENV to 'development */
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  PKG: require(fromRoot('package.json')),
  IS_PROD: process.env.NODE_ENV === 'production',
  IS_TEST: process.env.NODE_ENV === 'test',
  IS_DEV: process.env.NODE_ENV === 'development',
}
