const path = require('path');
const process = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            // {
            //     test: /\.(s(a|c)ss)$/,
            //     use: ['style-loader','css-loader', 'sass-loader']
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
            //     use: {
            //         loader: 'url-loader',
            //     },
            // },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true,
        port: 9000,
    },
}