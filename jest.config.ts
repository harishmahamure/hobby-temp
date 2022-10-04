import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  rootDir: './',
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-dom', './app/test-utils/test-setup.ts'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)'
  ]
}

module.exports = config
