const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { distPath, srcPath } = require('./paths')

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            // 定义 window.ENV = 'development'
            ENV: JSON.stringify('development')
        }),
        // 告诉 webpack 使用了哪些动态链接库
        new webpack.DllReferencePlugin({
            // 描述 react 动态链接库的文件内容
            manifest: require(path.join(distPath, 'react.manifest.json'))
        })
    ],
    devServer: {
        port: 9001,
        static: distPath,
        open: true, // 自动打开浏览器
        compress: true, // 自动gzip压缩
        hot: true, // 热更新

        // 设置代理
        proxy: {
            // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
            '/api': 'http://localhost:3000',

            // 将本地 /api2/xxx 代理到 localhost:3000/xxx
            '/api2': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '/api2': ''
                }
            }
        }
    }
})