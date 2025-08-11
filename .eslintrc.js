module.exports = {
  env: {
    browser: true,      // for frontend React
    node: true,         // for backend Node.js
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',             // React specific linting
    'plugin:react-hooks/recommended',       // Hooks linting
    'plugin:jsx-a11y/recommended',          // Accessibility
    'plugin:prettier/recommended',          // Integrate with Prettier formatting
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    // Your custom rules here
    'react/react-in-jsx-scope': 'off',    // Not needed with React 17+
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off',            // TS handles prop types
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
