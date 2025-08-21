module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/unit-tests/**/*.test.ts'], // keep Playwright tests separate
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
