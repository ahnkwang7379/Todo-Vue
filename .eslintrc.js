module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  // add your custom rules here
  rules: {
    'vue/no-unused-components': 'error',
    'no-console': process.env.MODE === 'production' ? 'error' : 'off',
    'no-debugger': process.env.MODE === 'production' ? 'error' : 'off',
  },
};
