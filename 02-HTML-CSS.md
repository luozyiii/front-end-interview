# 2.1 HTML CSS 面试题

## HTML 面试题

- 如何理解HTML语义化？
让人更加容易读懂（增加代码可读性） 
让搜索引擎更容易读懂（利于SEO）

- 默认情况下，哪些HTML标签是块状元素、哪些是内联元素？
块状元素：display: block/table；有div h1～h6 table ul ol p等；宽度充满一行  
内联元素：display: inline/inline-block; 有span img input button等；宽度由内容撑满

## CSS 面试题

### 布局
#### 盒子模型的宽度如何计算？
> example/01.html
```html
<!-- 如下代码，请问div1的 offsetWidth 是多少？ -->
<style>
  #div1 {
    width: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 10px;
  }
</style>
<div id="div1"></div>
```
offsetWidth = (内容宽度 + 内边距 + 边框)，无外边框 so 122px；  
补充：如果让offsetWidth = 100px，该如何做？（box-sizing:boder-box）此时的 offsetWidth = width; 内容宽度为78px.  

#### margin 纵向重叠的问题
> example/02.html
```html

<!-- 如下代码，AAA 与 BBB 之间的距离是多少 -->
<style>
  p {
    font-size: 16px;
    line-height: 1;
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>

<p>AAA</p>
<p></p>
<p></p>
<p></p>
<p>BBB</p>
```
- 相邻元素的margin-top和margin-bottom会发生重叠；  
- 空白的内容 p 也会重叠;  
so 15px  

#### margin 负值的问题
> example/03.html
对margin 的top left right bottom设置负值，有何效果？  
- margin-top 和 margin-bottom负值；元素向上 向左移动；  
- margin-right负值，右侧元素左移，自身不受影响；  
- margin-bottom负值，下方元素上移，自身不受影响；

#### BFC的理解和应用
>example/04-BFC.html
##### 什么是BFC？如何应用  
BFC: 块级格式化上下文；  
一块独立渲染的区域，内部元素的渲染不会影响边界以外的元素；  
##### 形成BFC的常见条件？  
- float 不是none；
- position 是absolute或fixed
- overflow 不是 visible
- display是flex inner-block等
##### BFC常见应用
- 清除浮动

#### float布局的问题，以及clearfix

##### 如何实现圣杯布局和双飞翼布局
>example/05.html example/06.html
- 三栏布局，中间一栏最先加载和渲染（内容最重要）
- 两侧内容固定，中间内容随着宽度自适应
- 一般用于PC网页

##### 技术点
- 使用float布局
- 两侧使用margin负值，以便和中间内容横向重叠
- 防止中间内容被两侧覆盖，`圣杯布局`用padding `双飞翼布局`用margin

##### 手写clearfix  
```css
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
.clearfix {
  *zoom: 1; /* 兼容IE低版本 */
}
```

#### flex画色子
flex实现一个三点色子
##### 常用语法的回顾
- flex-direction
- justify-content
- align-items
- flex-wrap
- align-self

### 定位
- absolute和relative分别依据什么定位
relative 依据自身定位；absolute 依据最近一层的定位元素(absolute, relative, fixed)定位；找不到根据body定位

#### 居中对齐有哪些实现方式？
##### 水平居中
- inline 元素：text-align: center
- block 元素：margin: auto
- absolute 元素：left:50% + margin-left负值

##### 垂直居中
- inline 元素：line-height 的值等于height值
- absolute 元素：top:50% + margin-top负值
- absolute 元素：left: 50% + top: 50% + transform: translate(-50%,-50%);
- absolute 元素：top,left,bottom,right = 0 + margin: auto

### 图文样式
#### line-height的继承问题
- 写具体数值，如30px，则继承该值
- 写比例，如2 / 1.5, 则继承该比例
- 写百分比，如200%，则继承`计算`出来的值(`考点`)


### 响应式
#### rem是什么？
rem 是一个长度单位
- px, 绝对长度单位，最常用
- em, 相对长度单位，相对于父元素，不常用
- rem, 相对长度单位，相对于根元素`(html)`，常用于响应式布局

#### 响应式布局的常见方案？
- media-query, 根据不同的屏幕宽度设置根元素font-size
- rem, 基于根元素的相对单位

#### vw/vh
- rem 的弊端: "阶梯"性

- 网页视口尺寸
```javascript
window.screen.height       // 屏幕高度
window.innerHeight         // 网页视口高度
document.body.clientHeight // body 高度
```
- vw 网页视口宽度的 1/100
- vh 网页视口高度的 1/100
- vmax 取两者最大值； vmin取两者最小值

### CSS3
- 关于CSS3 动画
- 并不是面试的重点，除非你面试是一个专门做动画的职位
