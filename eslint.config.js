import eslint from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import is from 'eslint-plugin-no-inline-styles';
import pluginTailwindCSS from 'eslint-plugin-tailwindcss';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default tseslint.config(
  // Ignore prod build files
  { ignores: ['dist'] },
  // TS + React
  {
    files: ['src/**/*.{ts,tsx}', 'vite.config.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      prettierConfig,
    ],

    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'typescript-eslint': tseslint,
      prettier,
    },

    languageOptions: {
      globals: {
        env: {
          node: true,
          jest: true,
        },
      },
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: { react: { version: '18.3' } },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-ignore': 'allow-with-description' }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-use-before-define': 'off',
      'prettier/prettier': 'warn',
      'react/boolean-prop-naming': ['warn', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
      'react/jsx-handler-names': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  // Custom
  {
    extends: [],
    plugins: { 'jsx-a11y': jsxA11y, 'no-inline-styles': is, react: react },
    rules: {
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-inline-styles/no-inline-styles': 'error',
      'no-unused-vars': 'off',
      'no-unused-vars': 'off',
      'prefer-const': 'warn',
      'prefer-template': 'warn',
      '@typescript-eslint/restrict-template-expressions': ['warn', { allowNumber: true }],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          reservedFirst: ['ref'],
          shorthandFirst: true,
        },
      ],
      // 'sort-keys': ['warn', 'asc', { caseSensitive: true, natural: true }],
    },
  },
  // Tailwind
  {
    plugins: { tailwindcss: pluginTailwindCSS },
    rules: { ...pluginTailwindCSS.configs.recommended.rules, 'tailwindcss/classnames-order': 'warn' },
  },
  // Query
  {
    plugins: {
      '@tanstack/query': pluginQuery,
    },
    rules: {
      '@tanstack/query/exhaustive-deps': 'error',
    },
  }
);
