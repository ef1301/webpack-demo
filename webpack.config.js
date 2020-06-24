const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ArcGISPlugin = require("@arcgis/webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    elements: './src/pages/elements.js',
    colors: './src/pages/colors.js',
    icons: './src/pages/icons.js',
    layout: './src/pages/layout.js',
    links: './src/pages/links.js',
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    //    new ArcGISPlugin(),

    new HtmlWebpackPlugin({
      title: 'Development'
    }),
    new HtmlWebpackPlugin({
      title: 'Elements',
      filename: './elements.html',
      template: './src/template.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Colors',
      filename: './colors.html',
      template: './src/template.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Icons',
      filename: './icons.html',
      template: './src/template.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Layout',
      filename: './layout.html',
      template: './src/template.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Links',
      filename: './links.html',
      template: './src/template.html'
    }),

    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,

        // Set loaders to transform files.
        // Loaders are applying from right to left(!)
        // The first loader will be applied after others
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            // This loader resolves url() and @imports inside CSS
            loader: "css-loader",
          },
          {
            // Then we apply postCSS fixes like autoprefixer and minifying
            loader: "postcss-loader",
          },
          {
            // First we transform SASS to standard CSS
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            }
          },
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};
