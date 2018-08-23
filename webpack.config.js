const path = require('path');
//se encarga de refrescar la pagina automaticamnete
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractTextPluginConfig = new ExtractTextPlugin('main.css');

const config = {
    entry: './app/index.jsx',
    output:{
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
              {
                test: /\.js$/,
                include: __dirname + '/app',
                loader: 'babel-loader',
              },
              {
                test: /\.scss$/,
                include: __dirname + '/app',
                loader: ExtractTextPlugin.extract('css!sass')
              }
        ]
    },
    plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
};

module.exports = config;
