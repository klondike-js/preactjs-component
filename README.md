# @klondike/preactjs-component

## Documentation
- This is a custom component template for [preact-cli](https://github.com/developit/preact-cli).
- [For Preact](https://preactjs.com/): General information about how to work with Preact, not specific to this template

## Usage

``` bash
$ npm install -g preact-cli
$ preact create klondike-js/preactjs-component my-project
$ cd my-project
$ npm install
$ npm run dev
```

## Commands

- `npm run start`: Runs webpack build with the watch option

- `npm run build`: Production-ready build

- `npm run lint`: Pass JavaScript files using ESLint

- `npm run test`: Run Jest and [`preact-render-spy`](https://github.com/mzgoddard/preact-render-spy) for your tests

### How to Test

The `component` template provides a basic test setup with Jest and [`preact-render-spy`](https://github.com/mzgoddard/preact-render-spy). You are free to change preact-render-spy with any other assertion library. The advantage of it is that it supports a similiar terminology and feature set as the Enzyme library for testing React applications.

You can run all additional Jest CLI commands with the `npm run test` command as described in the [Jest docs](https://facebook.github.io/jest/docs/en/cli.html#using-with-npm-scripts). For example, running jest in watch mode would be :

- `npm run test -- --watch` instead of  `jest --watch `