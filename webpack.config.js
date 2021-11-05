const path = require('path');
const process = require('process');
const webpack = require('webpack');
const dotenv = require('dotenv')
const {ProvidePlugin, DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env) => {
    console.log(env)
    return {
        mode: env.WEBPACK_SERVE ? 'development' : 'production',
        entry: {
            bootstrap: path.join(__dirname, 'src/style/bootstrap', 'bootstrap.bundle.min.js'),
            app: path.join(__dirname, 'src', 'index.tsx')
        },
        // FIXME
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
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
                    test: /\.(svg|jpg|png)$/,
                    type: "asset/resource"
                },
                {
                    test: /\.(woff|woff2|eot|otf|ttf)$/,
                    use: {
                        loader: 'url-loader',
                    },
                },
            ],
        },
        output: {
            filename: '[name].bundle.[contenthash].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, './', 'index.html')
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(__dirname, 'public'),
                        to: 'public',
                        globOptions: {
                            ignore: ['*.DS_Store'],
                        },
                    },
                ],
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
}
