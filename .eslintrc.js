module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/standard',
    'plugin:vue/essential',
  ],
  rules: {},
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    'workbox': 'readonly',
  },
}
