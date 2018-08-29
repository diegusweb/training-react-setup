const path = require('path');
const webpack = require('webpack');
//se encarga de refrescar la pagina automaticamnete
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractTextPluginConfig = new ExtractTextPlugin('main.css');

const config = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/index.jsx'
    ],
    output:{
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/'
        //necessary for HMR to know where to load the hot update chunks
    },
    devServer:{
        hot: true,
       //activate hot reloading
       contentBase: '/dist',
       //match the output path
       publicPath: '/'
       //match the output publicPath
    },
    module:{
        rules:[
            {
                 test: /\.(jsx|js)$/,
                 exclude: /node_modules/,
                 use:[
                     {
                         loader: 'babel-loader',
                     }
                 ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                     fallback: "style-loader",
                     use: "css-loader!sass-loader",
                })
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
      //activates HMR
      new webpack.NamedModulesPlugin(),
      //prints more readable module names in the browser console on HMR updates
      HtmlWebpackPluginConfig,
      ExtractTextPluginConfig
  ]
};

module.exports = config;
