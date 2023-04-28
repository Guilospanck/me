const path = require('path')

const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const common = require('./webpack.common')
const { merge } = require('webpack-merge')

const fs = require('fs')

module.exports = (env) => {
  const envfile = env.envfile || 'development'

  return merge(common, {
    mode: 'development', // automatically sets NODE_ENV to development
    devtool: 'inline-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'build'),
        watch: true
      },
      historyApiFallback: true,
      port: 3000,
      server: {
        type: 'https',
        options: {
          key: fs.readFileSync(path.join(__dirname, 'certs/localhost-key.pem')),
          cert: fs.readFileSync(path.join(__dirname, 'certs/localhost.pem'))
        }
      }
    },
    plugins: [
      new Dotenv({
        path: `.env.${envfile}`
      }),
      new HtmlWebpackPlugin({
        template: 'template.dev.html'
      }),
      new FaviconsWebpackPlugin('src/assets/images/logo-512x512.png')
    ]
  })
}
