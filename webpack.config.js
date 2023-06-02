const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined

module.exports = {
    mode,
    target,
    devtool,
    entry: './src/script.js',
    output: {
        filename: 'bundle.[contenthash].js',
        clean: true,
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port:3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'task3.html')
        })
    ],
    module: {
        rules: [{
            test: /\.html$/i,
            loader: 'html-loader',
        }]
    }
}