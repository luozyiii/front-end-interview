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

### 优化产出代码

## 构建流程概述

