module.exports = {
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock'),
  },
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
