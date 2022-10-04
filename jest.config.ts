import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  rootDir: './',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom', './app/test-utils/test-setup.ts'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native' +
      '|@react-native-community' +
      '|@react-navigation' +
      '|native-base' +
      '|@expo(nent)?/.*' +
      '|expo-.*/.*' +
      '|@unimodules' +
      '|@codler/react-native-keyboard-aware-scroll-view' +
      '|@react-native-picker' +
      '|victory-.*/.*' +
      '/)'
  ],
  transform: { '\\.[jt]sx?$': ['babel-jest', { presets: ['babel-preset-expo'] }] },
  globals: {
    __DEV__: true
  }

}

module.exports = config
