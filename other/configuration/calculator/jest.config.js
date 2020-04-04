module.exports = {
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock'),
  },
  // to support any loader output used with webpack that isn't javascript
  setupTestFrameworkScriptFile: require.resolve(
    './test/setup-test-framework.js',
  ),
  // to take care of polyfills for things jest (Node) does not support like "locaclStorage or sessionStorage"
  collectCoverageFrom: ['**/src**/*.js'],
  // whitelist for where coverage testing should be done for
  coverageThreshold: {
    global: {
      statements: 21,
      branches: 10,
      functions: 19,
      lines: 21,
    },
  },
  // Lower bound for coverage of all files, you can also specify threshold for specific files
}
