module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': 0,
    'vue/multi-word-component-names': 0,
    'space-before-function-paren': 0,
    'vue/no-mutating-props': 0,
    'vue/no-multiple-template-root': 0,
    'eslint-plugin-vue': 'off'
  }
}
