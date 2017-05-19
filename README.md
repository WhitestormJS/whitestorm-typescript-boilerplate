# WhiteStormJS - React/Redux - three.js - TypeScript boilerplate
[![Build Status](https://travis-ci.org/WhitestormJS/whitestorm-typescript-boilerplate.svg?branch=master)](https://travis-ci.org/WhitestormJS/whitestorm-typescript-boilerplate)
[![Dependency Status](https://david-dm.org/whitestormJS/whitestorm-typescript-boilerplate.svg)](https://david-dm.org/whitestormJS/whitestorm-typescript-boilerplate)
[![devDependency Status](https://david-dm.org/whitestormJS/whitestorm-typescript-boilerplate/dev-status.svg)](https://david-dm.org/whitestormJS/whitestorm-typescript-boilerplate#info=devDependencies)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/hirako2000/polypack/blob/master/LICENSE)

**WhiteStorm TypeScript Boilerplate** is a starter kit for crafting  3D applications using modern technologies:
- [TypeScript](https://www.typescriptlang.org/)
- [WhiteStormJS](https://whsjs.io)
- [three.js](https://threejs.org/)
- [React](https://github.com/facebook/react) & [Redux](https://github.com/reactjs/redux)

## [Video](https://streamable.com/nvvlv)

[![](http://i.imgur.com/QUPK7Ej.jpg)](https://streamable.com/nvvlv)

## Dynamic updates - Redux

![](http://i.imgur.com/JQoXKp1.png)

## Libraries
This starter kit also uses the following libraries and tools:

#### Core
- [React DOM](https://github.com/facebook/react) for views.
- [React Router](https://github.com/reactjs/react-router) to handle in-app routing.
- [React-Redux](https://github.com/reactjs/react-redux) to use React-Redux bindings.
- [React-Router-Redux](https://github.com/reactjs/react-router-redux) to keep application state sync with route changes.

#### Utilities
- [Redux Thunk](https://github.com/gaearon/redux-thunk) for dispatching async actions.
- [Redux Connect](https://github.com/makeomatic/redux-connect) for resolving async props in react-router.
- [React Helmet](https://github.com/nfl/react-helmet)
- [classnames](https://github.com/JedWatson/classnames)

#### Build System
- [Webpack](https://github.com/webpack/webpack) for bundling.
  - [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader) as ts loader.
  - [Babel Loader](https://github.com/babel/babel-loader) as js loader.
  - [React Hot Loader](https://github.com/gaearon/react-hot-loader) for providing hot reload capability to our development server
  - [Style Loader](https://github.com/webpack/style-loader)
  - [CSS Loader](https://github.com/webpack/css-loader)
  - [PostCSS Loader](https://github.com/postcss/postcss)
    - [PostCSS cssnext](https://github.com/MoOx/postcss-cssnext)
    - [PostCSS Assets](https://github.com/assetsjs/postcss-assets)
  - [JSON Loader](https://github.com/webpack/json-loader)
  - [File Loader](https://github.com/webpack/file-loader)
  - [URL Loader](https://github.com/webpack/url-loader)
  - [Sourcemap Loader](https://github.com/webpack/source-map-loader)
  - [Manifest Plugin](https://github.com/danethurber/webpack-manifest-plugin)
  - [Extract Text Plugin](https://github.com/webpack/extract-text-webpack-plugin) for exporting bundled css.
  - [tslint Loader](https://github.com/wbuchwalter/tslint-loader) for using tslint as preloader on build process.
  - [stylelint Loader](https://github.com/adrianhall/stylelint-loader) for using stylelint as preloader on build process.

#### Dev & Prod Server
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
  - [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)
  - [Webpack Hot Middleware](https://github.com/webpack/webpack-hot-middleware)
- [Express](https://github.com/expressjs/express) for running server both on client and server side.
- [Compression](https://github.com/expressjs/compression) for gzip compression
- [Serve Favicon](https://github.com/expressjs/serve-favicon) for serving favicon.

#### Developer Experience
- [Typings](https://github.com/typings/typings) for installing type definitions of external libraries.
- [tslint](https://github.com/palantir/tslint) for linting TypeScript files.
- [stylelint](https://github.com/stylelint/stylelint) for linting styles.
- [Redux Logger](https://github.com/theaqua/redux-logger)
- [Redux DevTools](https://github.com/gaearon/redux-devtools)
- [Chalk](https://github.com/chalk/chalk) for colored terminal logs.

#### Testing
- [Jest](https://facebook.github.io/jest/) for unit testing.
- [Fetch Mock](https://github.com/wheresrhys/fetch-mock) for testing async actions.
- [Redux Mock Store](https://github.com/arnaudbenard/redux-mock-store) for creating mock stores.

## Directory Structure
```bash
.
├── build                       # Built, ready to serve app.
├── config                      # Root folder for configurations.
│   ├── types                   # Global type definitions, written by us.
│   ├── webpack                 # Webpack configurations.
│   └── main.ts                 # Generic App configurations.
├── node_modules                # Node Packages.
├── src                         # Source code.
│   ├── app                     # App folder.
│   │ ├── components            # React Components.
│   │ ├── containers            # React/Redux Containers.
│   │ ├── helpers               # Helper Functions & Components.
│   │ ├── redux                 # Redux related code aka data layer of the app.
│   │ │   ├── modules           # Redux modules.   
│   │ │   ├── reducers.ts       # Main reducers file to combine them.  
│   │ │   └── store.ts          # Redux store, contains global app state.   
│   │ └── routes.tsx            # Routes.
│   ├── client.tsx              # Entry point for client side rendering.
│   ├── index.html              # root page template
│   └── server.tsx              # Entry point for server of static content.
├── typings                     # Type definitions installed with typings.              
├── .gitignore                  # Tells git which files to ignore.
├── .stylelintrc                # Configures stylelint.
├── Dockerfile                  # Dockerfile.
├── favicon.ico                 # Favicon.
├── package.json                # Package configuration.
├── README.md                   # This file
├── tsconfig.json               # TypeScript transpiler configuration.
├── tslint.json                 # Configures tslint.
└── typings.json                # Typings package configuration.
```

## Installation

You can clone from this repository or [install the latest version](https://github.com/whitestormJS/whitestorm-typescript-boilerplate/releases) as a zip file.

```bash
$ git clone https://github.com/whitestormJS/whitestorm-typescript-boilerplate
$ cd whitestorm-typescript-boilerplate
$ npm install
```

## Usage

All commands defaults to development environment. You can set `NODE_ENV` to `production` or use the shortcuts below.

```bash
# Running

$ npm start # This starts the app in development mode

# Starting it with the production build
$ NODE_ENV=production npm start # or
$ npm run start:prod

# Building

$ npm build # This builds the app in development mode

# Commands below builds the production build
$ NODE_ENV=production npm build # or
$ npm run build:prod

# Testing
$ npm test
```

## Notes
```bash
# If you want install additional libraries, you can also install their typings from DefinitelyTyped
$ typings install dt~<package> --global --save
# or if it's located on npm
$ typings install <package> --save-dev
```

## Credits

[MIT license](LICENSE).
