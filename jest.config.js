module.exports = {
  preset: 'react-native',
  globals: {
    __DEV__: true,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/(?!native-base|react-native-safe-area-context|react-native|@react-native-community|react-navigation|@react-navigation/.*)/',
  ],
  testRegex: '(\\.(test|spec))\\.(ts|tsx|js)$',
  setupFiles: ['<rootDir>/__tests__/__config__/setup.ts'],
};
