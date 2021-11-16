module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/_{app,document}.tsx',
    '!**/tests/**',
  ],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules)[/\\\\]'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/esbuild-runner/jest',
  },
};
