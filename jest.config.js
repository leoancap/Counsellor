module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '\\.(ts|tsx)?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/**/?(*.)test.{ts,tsx}'], // looks for your test
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-styled-components',
  ], // sets at test files
  moduleDirectories: ['node_modules', '.'],
}
