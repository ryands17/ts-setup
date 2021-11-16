# TypeScript + esbuild dev setup

This is a basic TypeScript and esbuild dev setup created with [Esbuild Runner (esr)](https://github.com/folke/esbuild-runner) and Nodemon along with tests using in Jest. The development and test times are significantly faster when using esbuild as opposed to `tsc`.

This can be used to create a simple CLI or a full-fledged API.

## Prerequisites

- Node 14 (LTS) or above
- `yarn` (recommended) or `npm`
- Setup using `yarn` or `npm install`

## Commands

- `yarn dev`: Runs the server in development mode using `esr` and `nodemon`.

- `yarn build`: Builds the app using `tsc`.

- `yarn check`: Runs the TypeScript checker to check for any type errors.

- `yarn test`: Runs the tests using Jest.

- `yarn start`: Starts the built server (used in production).
