const path = require('path');
//se encarga de refrescar la pagina automaticamnete
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: 'main.css',
    allChunks: true
});

const config = {
    entry: './app/index.jsx',
    output:{
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
              {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
              },
              {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader" // translates CSS into CommonJS
                            },
                            {
                                loader: "sass-loader" // compiles Sass to CSS
                            }
                        ],
                        fallback: "style-loader" // used when css not extracted
                    }
                ))
            },
        ]
    },
    plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
};

module.exports = config;
