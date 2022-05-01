const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb', // might hurt beginners https://github.com/facebook/create-react-app/issues/3540#issuecomment-358792632
    'airbnb-typescript/base',
    'plugin:jsx-a11y/recommended', // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#usage
    "plugin:storybook/recommended",
    'prettier',
  ],
  plugins: ['prettier', 'testing-library'],
  overrides: [
    {
      // from https://github.com/testing-library/eslint-plugin-testing-library
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)', '*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
    },
  ],
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/react-in-jsx-scope': 'off', // Prevent forcing `Need to import React for JSX`
    'import/extensions': 'off', // Disable to allow import files without file extensions
    'import/no-extraneous-dependencies': 'off', // Due to NODE_PATH `src` imports
    'max-len': ['error', { code: 120, tabWidth: 2 }], // To match with styling
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }], // Allow JSX syntax only in .tsx no .jsx
    'react/prop-types': 'off', // No sense with TS https://github.com/iamturns/eslint-config-airbnb-typescript/issues/57
    'import/prefer-default-export': 'off', // Prevent forcing to have default props
    'react/require-default-props': 'off', // Prevent forcing to have default props

    'react/jsx-props-no-spreading': 'off', // Allow prop spreading
    'no-restricted-exports': ["off", { "restrictedNamedExports": ["default"] }], // Allow `export { default } from ...`
    'jsx-a11y/click-events-have-key-events': 'off', // Skip accessibility improvements such key press listeners
    'jsx-a11y/interactive-supports-focus': 'off'  // Skip accessibility improvements such as tab clicks to focus
  },
};
