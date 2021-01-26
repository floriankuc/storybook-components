module.exports = {
  roots: ["src"],
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["node_modules/"],
  transform: {
    // "^.+\\.tsx?$": "ts-jest"
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  testMatch: ["**/*.test.(ts|tsx)"],
  moduleNameMapper: {
    "react-spring/renderprops": './src/node_modules/react-spring/renderprops.cjs',
    "react-spring": './src/node_modules/react-spring/web.cjs'
  }
};
