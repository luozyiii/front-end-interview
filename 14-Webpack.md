# Webpack
> webpack-demo

- webpack 已是前端打包构建的不二选择
- 每日必用，面试必考
- 成熟的工具，重点在于配置和使用，原理并不高优

## 基本配置
> webpack-demo/build-base-conf

- 拆开配置和 merge
- 启动本地服务
- 处理 ES6
- 处理样式
- 处理图片
- 模块化

## 高级配置
- 多入口 (build-multi-entry)
- 抽离 css (build-min-extract-css)
- 抽离公共代码和第三方代码 (build-split-chunks)
- 异步加载JS
```javascript
// 引入动态数据 - 懒加载
setTimeout(()=> {
    // 定义 chunk
    import('./dynamic-data.js').then(res => {
        console.log(res.default.message) // 注意这里的 default
    })
},3000)
```
- 处理JSX
```javascript
// .babelrc
{
  "presets": ["@babel/preset-react"],
}
```
- 处理Vue （vue-loader）

## 性能优化

### 优化构建速度
> build-optimization

- 优化 babel-loader
```javascript
{
    test: /\.js$/,
    use: ['babel-loader?cacheDirectory'], // 开启缓存
    include: srcPath, // 明确范围
    // exclude: /node_modules/ // 排除范围
    // 范围： include 和 exclude 一般两者选一个即可
}
```
- IgnorePlugin
- noParse
- happypack 多进程打包
- ParallelUglifyPlugin 多进程压缩JS
- 自动刷新
```javascript
module.export = {
  watch: true, // 注意：开启监听后，webpack-dev-server 会自动开启刷新浏览器！！！
  watchOptions: {
    // 不监听的文件或文件夹
    ignored: /node_modules/,
    // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高  
    aggregateTimeout: 300,  // 默认为300ms
    // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的
    poll: 1000 // 默认每隔 1000 毫秒轮询一次
  }
}
```

- 热更新
- DllPlugin

#### module chunk bundle 的区别
- module: 各个源码文件，webpack中一切皆模板
- chunk：多模块合并成的，如entry import() splitChunk
- bundle：最终的输出文件

#### happypack 多进程打包
- JS单线程，开启多进程打包
- 提高构建速度（特别是多核CPU）

#### ParallelUglifyPlugin 多进程压缩JS
- webpack 内置Uglify工具压缩 JS
- JS单线程，开启多进程压缩更快
- 和 happypack 同理

#### 关于开启多进程
- 项目较大，打包较慢，开启多进程能提供速度
- 项目较小，打包很快，开启多进程会降低速度（进程开销）
- 按需使用

#### 热更新
- 自动刷新：整个网页全部刷新，速度较慢
- 自动刷新：整个页面全部刷新，状态会丢失
- 热更新：新代码生效，网页不刷新，状态不丢失

### 优化产出代码

## 构建流程概述

