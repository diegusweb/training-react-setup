const path = require('path');
//se encarga de refrescar la pagina automaticamnete
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
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
    plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
};

module.exports = config;
