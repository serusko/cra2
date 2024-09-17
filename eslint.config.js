import js from '@eslint/js';
import fs from 'fs';
import path from 'path';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import is from 'eslint-plugin-no-inline-styles';

const folders = ['metronic'];

export default tseslint.config(
  // Ignore prod build files
  { ignores: ['dist'] },
  // TS + React
  {
    files: ['src/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
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
      'prettier/prettier': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  // Custom
  {
    extends: [],
    plugins: { 'jsx-a11y': jsxA11y, 'no-inline-styles': is },
    rules: {
      '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-ignore': 'allow-with-description' }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-use-before-define': 'off',
      'no-unused-vars': 'off',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      'no-unused-vars': 'off',
      'prefer-const': 'warn',
      'prefer-template': 'warn',
      'react/boolean-prop-naming': ['warn', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
      'sort-keys': ['warn', 'asc', { caseSensitive: true, natural: true }],
      'react/jsx-handler-names': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-inline-styles/no-inline-styles': 'error',
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          reservedFirst: ['ref'],
          shorthandFirst: true,
        },
      ],
    },
    settings: {
      'import/external-module-folders': ['node_modules'],
      'import/internal-regex': `^(${folders.join('|')})[/]*`,
      'import/resolver': {
        node: {
          paths: ['./src'],
        },
      },
    },
  }
);
