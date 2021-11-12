/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      resolver: {
        sourceExts: ['jsx', 'mjs', 'js', 'ts', 'tsx'],
      },
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
