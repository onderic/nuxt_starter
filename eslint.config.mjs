// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Vue Rules
    'vue/multi-word-component-names': ['error', {
      ignores: ['index', 'error', 'default', '404', 'loading', '[...]*'], 
    }],
    'vue/file-name-casing': ['error', {
      '.vue': 'kebab-case',
      '^pages/.*\\.vue$': 'PascalCase',
    }],
    'vue/no-unused-components': 'error',
    'vue/require-default-prop': 'error',
    'vue/no-unused-vars': 'error',
    'vue/script-setup-uses-vars': 'error',

    // TypeScript Rules
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
   

    // Best Practices
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-unused-vars': 'error',

    // Import Rules
    'import/order': ['error', {
      'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      'newlines-between': 'always',
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': true,
      },
    }],

    // Code Style
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
  },
})
