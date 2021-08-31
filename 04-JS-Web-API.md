# JS Web API

## 从JS基础知识到JS Web API
- JS基础知识，规定语法（ESMA 62 标准）
- JS Web API， 网页操作的API（W3C标准）
- 前者是后者的基础，两者结合才能真正实际应用

## DOM

### 前言
- vue和React框架应用广泛，封装了DOM操作
- 但DOM操作一直都是前端工程师的基础、必备知识
- 只会vue而不懂DOM操作的前端，不会长久

### 题目
- DOM是哪种数据结构
- DOM操作的常用API
- attr 和 property 的区别
- 一次性插入多个DOM节点，考虑性能

### 知识点
#### DOM 本质
- 一颗树(DOM 树)

#### DOM节点操作
- 获取DOM节点
> dom.html
```javascript
const div1 = document.getElementById('div1')
console.log(div1)

const divList = document.getElementsByTagName('div') // 集合
console.log('divList.length', divList.length)
console.log('divList[0]', divList[0])

const containerList = document.getElementsByClassName('container') // 集合
console.log('containerList', containerList)

const pList = document.querySelectorAll('p')
console.log('pList', pList)
```

- attribute
```javascript
const pList = document.querySelectorAll('p')
const p1 = pList[0]
p1.setAttribute('data-name', 'name')
console.log(p1.getAttribute('data-name'))
p1.setAttribute('style', 'font-size:20px')
```

- property 形式
```javascript
const pList = document.querySelectorAll('p')
const p1 = pList[0]

// property 形式
p1.style.width = '100px'
p1.className = 'red'
console.log(p1.style.width)
console.log(p1.className)
console.log(p1.nodeName)
console.log(p1.nodeType)
```

##### property 和 attribute
- property: 修改对象属性，不会提现到html结构中
- attribute: 修改html属性，会改变html结构
- 两者都有可能引起DOM重新渲染

#### DOM结构操作
> dom-2.js
- 新增/插入节点
- 获取子元素列表 ，获取父元素
- 删除子元素

#### DOM性能
- DOM 操作非常“昂贵”，避免频繁的DOM操作
- 对DOM查询做缓存
```javascript
// 不缓存 DOM 查询结果
for(let i = 0; i < document.getElementsByTagName('p').length; i++) {
    // 每次循环，都会计算 length，频繁进行 DOM 查询
}
// 缓存 DOM 查询结果
const pList = document.getElementsByTagName('p')
const length = pList.length
for(let i = 0; i < length; i++) {
    // 缓存 length，只进行一次 DOM 查询
}
```
- 将频繁操作改成一次性操作
> demo-3.js
```javascript
const listNode = document.getElementById('list')

// 创建一个文档片段，此时还没有插入到 DOM 树中
const frag = document.createDocumentFragment()

// 执行插入
for(let x = 0; x<10; x++>) {
    const li = document.createElement('li')
    li.innerHTML = "List item " + x
    frag.appendChild(li)
}

// 都完成之后，再插入到 DOM 树
listNode.appendChild(frag)
```

## BOM

### 题目
- 如何识别浏览器的类型
- 分析拆解url各个部分

### 知识点

#### navigator
```javascript
const ua = navigator.userAgent
const isChrome = ua.indexOf('Chrome')
console.log(isChrome)
```

#### screen
```javascript
console.log(screen.width)
console.log(screen.height)
```

#### location
```javascript
console.log(location.href)
console.log(location.protocol)
console.log(location.pathname)
console.log(location.search)
console.log(location.hash)
```

#### history
```javascript
history.back() // 后退
history.forward() // 前进
```

## 事件绑定

## ajax

## 存储