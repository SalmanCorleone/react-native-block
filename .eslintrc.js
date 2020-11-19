module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: { sourceType: 'module' },
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
  },
};
