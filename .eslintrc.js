module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-default-export': 'error',
    'react-native/no-inline-styles': 'off'
  },
};
