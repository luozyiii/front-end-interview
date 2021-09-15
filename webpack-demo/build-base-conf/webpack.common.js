const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath } = require('./paths')

module.exports = {
    entry: path.join(srcPath, 'index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
            },
            // {
            //     test: /\.vue$/,
            //     use: ['vue-loader'],
            //     include: srcPath,
            // },
            {
                test: /\.css$/,
                // loader 的执行顺序是：从后往前  postcss-loader(处理浏览器兼容性)
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html'
        })
    ]
}