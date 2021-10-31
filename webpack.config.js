const path = require('path');
const process = require('process');
const webpack = require('webpack');
const dotenv = require('dotenv')
const {ProvidePlugin, DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@types': path.resolve(__dirname, 'src/interface'),
            '@store': path.resolve(__dirname, 'src/store/index'),
            '@util': path.resolve(__dirname, 'src/common/util')
        },
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
        new ESLintWebpackPlugin({
            extensions: ['ts']
        }),
        // new BundleAnalyzerPlugin(),
        new DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed)
        }),
        new ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true,
        port: 9000,
        historyApiFallback: true,
    },
}
