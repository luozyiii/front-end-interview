# [Babel](https://www.babeljs.cn/docs/)
> babel-demo

- 前端开发环境必备的工具
- 同 webpack, 需要了解基本的配置和使用

## 核心
- 环境搭建 & 基本配置
- babel-polyfill
- babel-runtime

### babel 环境搭建和基本配置
- 环境搭建
- .babelrc 配置
- presets 和 plugins

```bash
# 编译
npx babel src/index.js

```

### babel-polyfill 是什么
- 什么是 Polyfill(补丁)
- core-js`(补丁集合,缺不支持ES6 generator 函数)` 和 regenerator`支持ES6 generator 函数`
- babel-polyfill 即两者的集合

### babel-polyfill 现已被弃用
- Babel 7.4 之后弃用 babel-polyfill
- 推荐使用 core-js 和 regenerator
- 但并不影响面试考察它

### babel-polyfill 按需引入
- 文件较大
- 只有一部分功能，无需全部引入
- 配置按需引入
```javascript
// 全部引入
import '@babel/polyfill'

// 按需引入
"presets": [
    [
        "@babel/preset-env",
        {
            "useBuiltIns": "usage",
            "corejs": 3
        }
    ]
],
```

### babel-polyfill 的问题
- 会污染全局环境
- 如果做一个独立web系统，则没有问题
- 如果做一个第三方的库lib, 则有问题

### 配置babel-runtime，不会污染全局环境
```javascript
"plugins": [
    [
        "@babel/plugin-transform-runtime",
        {
            "absoluteRuntime": false,
            "corejs": 3,
            "helpers": true,
            "regenerator": true,
            "useESModules": false
            }
    ]
]
```


