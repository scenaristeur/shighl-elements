const path = require('path');

// Configurations shared between all builds
const common = {
  mode: 'production',
  entry: {
    //  "app-element": './src/component/app-element.js',
    //  "app-mini": './src/component/app-mini.js',
    //  "app-base": './src/base/app-element.js',
    //  "app-api": './src/api/app-api.js',
    "shighl-login": './src/shighl-login.js',
    "shighl-login-bootstrap": './src/shighl-login-bootstrap.js',
    /*  "banner-element": './src/hola/banner-element.js',
    "notes-element": './src/hola/notes-element.js',
    "inbox-element": './src/hola/inbox-element.js',
    "contacts-element": './src/hola/contacts-element.js',
    "chat-element": './src/hola/chat-element.js',
    "holacratie-element": './src/hola/holacratie-element.js',*/
    /*"login-element": './src/component/login-element.js',
    "chats-element": './src/component/chats-element.js',
    "messages-element": './src/component/messages-element.js',
    "flow-element": './src/component/flow-element.js',
    "eve.custom.js": "./node_modules/evejs/dist/eve.custom.js"*/
  },
  output: {
    filename: '[name].js',

    library: 'ShighlLogin',
    libraryExport: 'default',
    //  path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    '@solid/query-ldflex': {
      root: ['solid', 'data'],
      commonjs: '@solid/query-ldflex', // not used, but needed for config
      commonjs2: '@solid/query-ldflex',  // not used, but needed for config
    },
  },
  /*externals: {
  "@solid/query-ldflex": 'data',
  "lit-element": "LitElement",
  "evejs": "eve",
  "solid-auth-client": "auth",
  "@rdfjs/data-model": "rdfjs"
},*/
devServer: {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 9001,
  historyApiFallback: true,
  inline: true,
  open: true,
  hot: true
},
devtool: "eval-source-map",
performance: { hints: false }
}

// Configurations specific to the window build
const window = {
  ...common,
  name: 'window',
  output: {
    ...common.output,
    path: path.resolve(__dirname, 'dist', 'window'),
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        //  loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "eval-source-map",
  performance: { hints: false }
}

// Configurations specific to the node build
const node = {
  ...common,
  name: 'node',
  output: {
    ...common.output,
    path: path.resolve(__dirname, 'dist', 'node'),
    libraryTarget: 'commonjs2',
  },
}

module.exports = [
  window,
  node,
]
