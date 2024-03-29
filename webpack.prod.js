const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = (env) => {
  const envfile = env.envfile || 'production'

  return merge(common, {
    mode: 'production', // automatically sets NODE_ENV to production
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      axios: 'axios'
    },
    optimization: {
      // vendor bundle
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      },
      minimize: true,
      minimizer: [new TerserPlugin()]
    },
    plugins: [
      new Dotenv({
        path: `.env.${envfile}`
      }),
      new HtmlWebpackPlugin({
        template: 'template.prod.html'
      }),
      new CleanWebpackPlugin(),
      new FaviconsWebpackPlugin('src/assets/images/logo-512x512.png')
    ]
  })
}
