const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath } = require('./paths')

module.exports = {
    module: {
        rules: [
            
        ]
    },
    plugins: [
        // 多入口 - 生成 index.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            chunks: ['index', 'vendor', 'common'] // 考虑代码分割
        }),
        // 多入口 - 生成 other.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'other.html'),
            filename: 'other.html',
            chunks: ['other', 'common']
        })
    ]
}