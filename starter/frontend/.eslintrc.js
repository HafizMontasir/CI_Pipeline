module.exports = {
  ignorePatterns: ['build/', 'dist/', 'node_modules/'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Add this line to enable eslint-plugin-prettier and eslint-config-prettier
  ],
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: false,
        printWidth: 120,
        parser: 'babel-ts',
      },
    ],
    'react/prop-types': process.env.FAIL_LINT ? 2 : 0,
    'react/jsx-uses-vars': 'warn',
    // Disable conflicting rules for Prettier
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
};
