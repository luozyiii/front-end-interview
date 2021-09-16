const path = require('path')
const webpack = require('webpack')
const { distPath } = require('./paths')

module.exports = {
    mode: 'development',
    entry: {
        // 把 React 相关的模块放到一个单独的动态链接库
        react: ['react', 'react-dom']
    },
    output: {
        // 输出的动态链接库的文件名称， [name] 代表当前动态链接库的名称
        // 也就是 entry 中配置的 react 和 polyfill
        filename: '[name].dll.js',
        // 输出的文件都放到 dist 目录下
        path: distPath,
        // 存放动态链接库的全局变量名称，例如对应 react 来说 就是 _dll_react
        // 之所以在前面加上 _dll_ 是为了防止全局变量冲突
        library: '_dll_[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            // 动态链接库的全局变量名称，需要和output.library 中保持一致
            // 该字段的值也就是输出的 manifest.json 中的 name 字段的值
            // 例如：react.manifest.json 中就有 "name": "_dll_react"
            name: '_dll_[name]',
            path: path.join(distPath, '[name].manifest.json')
        })
    ]
}