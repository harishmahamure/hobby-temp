module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    '@typescript-eslint/no-floating-promises': [0],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
}
