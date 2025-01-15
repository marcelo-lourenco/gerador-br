import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    ignores: ["dist/", "docs/", "node_modules/", "temp/"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'import/prefer-default-export': 'off',
      'max-len': 'off',
      'prefer-const': 'off',
      'no-restricted-syntax': 'off',
      'guard-for-in': 'off',
      'default-param-last': 'off',
      'func-names': ['error', 'as-needed'],
      'no-plusplus': 'off',
      'no-else-return': 'off',
      'no-nested-ternary': 'off',
      "security/detect-unsafe-random": "off",
    }
  },
  pluginJs.configs.recommended,
];
