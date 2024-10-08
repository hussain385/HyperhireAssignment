module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@styles': './src/styles',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@': './src',
          '@redux': './src/redux',
        },
      },
    ],
  ],
};
