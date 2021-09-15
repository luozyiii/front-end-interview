const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common.js')
const { distPath } = require('./paths')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
        path: distPath
    },
    module: {
        rules: [
            // 图片 - 考虑 base64 编码的情况
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // 小于 5kb 的图片用 base64 格式产出
                        // 否则，依然沿用 file-loader 的形式产出 url
                        limit: 5 * 1024,
                        // 打包到 statics 目录下; 不设置默认根目录
                        outputPath: 'statics/'
                    }
                }
            },
            // 抽离css
            {
                test: /\.css$/,
                // 注意：不再使用 style.loader
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            // 抽离less
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader',]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production')
        }),
        // 抽离css
        new MiniCssExtractPlugin({
            filename: 'css/main.[chunkhash].css'
        }),
        // new UglifyJSPlugin()
    ],
    optimization: {
        // 压缩css
        minimizer: [new TerserWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()],
        // 分割代码块
        splitChunks: {
            /*
                install  入口chunk，对异步导入的文件不处理
                async  异步chunk，对异步导入的文件处理
                all   全部chunk
            */
            chunks: 'all',
            // 缓存分组
            cacheGroups: {
                // 第三方模块
                vendor: {
                    name: 'vendor', // chunk 名称
                    priority: 1, // 权限更高，优先抽离，重要！！！
                    test: /node_modules/,
                    minSize: 0, // 大小限制
                    minChunks: 1, // 最少复用次数
                },
                common: {
                    name: 'common', // chunk 名称
                    priority: 0, // 权限更高，优先抽离，重要！！！
                    minSize: 0,
                    minChunks: 2, // 最少复用次数
                }
            }
        }
    }
})