const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const Happypack = require('happypack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common.js')
const { distPath, srcPath } = require('./paths')

module.exports = merge(common, {
    mode: 'production',
    entry: {
        index: path.join(srcPath, 'index.js'),
        other: path.join(srcPath, 'other.js'),
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: distPath,
        // publicPath: 'http://cdn.xxx.com' // 修改所有静态文件 url 的前缀
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例
                use: ['happypack/loader?id=babel'],
                include: srcPath, // 明确范围
                // exclude: /node_modules/ // 排除范围
                // 范围： include 和 exclude 一般两者选一个即可
            },
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
                        outputPath: 'statics/',
                        // 设置图片的 cdn 地址
                        // publicPath: 'http://cdn.xxx.com'
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
            },
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
        // happypack 开启多进程打包
        new Happypack({
            // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
            id: 'babel',
            // 如何处理 .js, 用户和 loader 配置中的一样
            loaders: ['babel-loader?cacheDirectory']
        }),
        // 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码
        new ParallelUglifyPlugin({
            // 传递给 UglifyJS 的参数
            uglifyJS: {
                output: {
                    beautify: false, // 最紧凑的输出
                    comments: false, // 删除所有的注释
                },
                compress: {
                    // 删除所有的 `console` 语句，可以兼容ie浏览器
                    drop_console: true,
                    // 内嵌定义但是只用到一次的变量
                    collapse_vars: true,
                    // 提取出出现多次但是没有定义成变量去引用的静态值
                    reduce_vars:true
                }
            }
        })
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