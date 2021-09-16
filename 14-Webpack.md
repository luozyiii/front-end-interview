# [Webpack](https://webpack.docschina.org/concepts/)
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

- 优化 babel-loader `(可用于生产环境)`
```javascript
{
    test: /\.js$/,
    use: ['babel-loader?cacheDirectory'], // 开启缓存
    include: srcPath, // 明确范围
    // exclude: /node_modules/ // 排除范围
    // 范围： include 和 exclude 一般两者选一个即可
}
```
- IgnorePlugin `(可用于生产环境)`
```javascript
// 忽略 moment 的本地化内容
new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
```

- noParse `(可用于生产环境)`
```javascript
// 过滤不需要解析的文件，忽略的文件中 不应该含有 import, require, define 的调用，或任何其他导入机制。忽略大型的 library 可以提高构建性能。
module.exports = {
  //...
  module: {
    noParse: /jquery|lodash/,
  },
};
```

- happypack 多进程打包 `(可用于生产环境)`
- ParallelUglifyPlugin 多进程压缩JS `(可用于生产环境)`
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

- DllPlugin 动态链接库插件

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
```javascript
devServer: {
  hot: true, // 热更新
}
```

#### DllPlugin 动态链接库插件
> webpack-dll-demo
- 前端框架如vue react，体积大，构建慢
- 较稳定，不常升级版本
- 同一个版本只构建一次即可，不用每次都重新构建

##### DllPlugin 使用
- webpack 已内置DllPlugin 插件
- DllPlugin - 打包出 dll 文件
- DllReferencePlugin - 使用 dll 文件

### 优化产出代码
#### 好处
- 体积更小
- 合理分包，不重复加载
- 速度更快、内存使用更少

#### 具体实践
- 小图片 base64 编码
- bundle 加 hash (命中缓存)
- 懒加载
- 提取公共代码
- IgnorePlugin
- 使用 CDN 加速
- 使用 production
- Scope Hosting

#### 使用 production
- 自动开启代码压缩
- Vue React 等会自动删除调试代码（如开发环境的warning）
- 启动Tree-Shaking `(必须用ES6 Moudle 才能让 tree-shaking 生效, commonjs 就不行)`

#### ES6 Module 和 Commonjs 区别
- ES6 Module 静态引入，编译时引入
- Commonjs 动态引入，执行时引入
- 只有ES6 Module 才能静态分析，实现Tree-Shaking
```javascript
let apiList = require('./config.api.js')
if(isDev){
  // 可以动态引入，执行时引入
  apiList = require('./config.api_dev.js')
}

import apiList from './config.api.js'
if(isDev){
  // 编译时报错，只能静态引入
  import apiList from './config.api_dev.js'
}
```

#### Scope Hosting `作用域提升`
Scope Hoisting 的实现原理其实很简单：分析出模块之间的依赖关系，尽可能将打散的模块合并到一个函数中，前提是不能造成代码冗余。 因此「只有那些被引用了一次的模块才能被合并」。
```javascript
// hi.js
export default 'hi'

// main.js
import str from './hi.js'
console.log(str)
```
