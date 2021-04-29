const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = function buildWebpackConfiguration(env = {}) {
  const clientSrcPath = path.resolve(__dirname, 'src');
  const serverSourcePath = path.resolve(__dirname, 'server');

  return {
    target: getTarget(),
    entry: getEntry(),
    output: {
      filename: getOutputFileName(),
      publicPath: '/'
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx']
    },

    devtool: env.production ? false : 'eval-sourcemap',

    /*
        Very unintuitive https://github.com/webpack/webpack/issues/1599#issuecomment-186841345

        This allows __dirname to work as expected in the transpiled output
     */
    node: {
      __filename: false,
      __dirname: false
    },

    plugins: [
        new CopyPlugin({
          patterns: [
            { from: 'server/public', to: 'public' }
          ]
        })
    ],

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          include: [clientSrcPath, serverSourcePath]
        }
      ]
    }
  };

  function getTarget() {
    if (isServerBuild()) {
      return 'node';
    }
    else {
      return 'web';
    }
  }

  function getEntry() {
    if (isServerBuild()) {
      return './server/server.tsx'
    }
    else {
      return './src/index.tsx'
    }
  }

  function getOutputFileName() {
    if (isServerBuild()) {
      return 'server.js';
    }
    else {
      return 'public/bundle.js';
    }
  }

  function isServerBuild() {
    return env.platform === 'server';
  }
};
