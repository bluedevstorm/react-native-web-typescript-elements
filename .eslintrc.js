module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['node_modules/', 'coverage/', 'android/', 'ios/'],
  rules: {
    'prettier/prettier': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    // "@typescript-eslint/no-unsafe-call": "off",
    // "@typescript-eslint/no-unsafe-return": "off",
    "jsx-quotes": ["error", "prefer-double"]
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect'
    },
  },
};
