# Vue 高级特性
> components/AdvancedUse

- 不是每个都很常用，但用到的时候必须知道
- 考察对Vue的掌握是否全面，且有深度
- 考察做过的项目是否有深度和复杂度（至少能用到高级特性）

## 自定义 v-model
> components/AdvancedUse/CustomVModel.vue

## $nextTick
> components/AdvancedUse/NextTick.vue

- Vue 是异步渲染
- data 改变之后，DOM不会立刻渲染
- $nextTick 会在DOM渲染之后被触发，以获取最新DOM节点

## slot（插槽）
- 基本使用
> components/AdvancedUse/SlotDemo.vue

- 作用域插槽
> components/AdvancedUse/ScopedSlot.vue

- 具名插槽
```html
<!-- NamedSlot 组件 -->
<div>
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
</div>

<!-- 使用 -->
<NamedSlot>
    <!-- 缩写 <template #header> -->
    <template v-slot:header>
        <h1>将插入 header slot 中</h1>
    </template>
    <p>将插入到 main slot 中，即未命名的 slot</p>
    <template #footer>
        <h1>将插入 footer slot 中</h1>
    </template>
</NamedSlot>
```

## 动态组件
- :is="component-name" 用法
- 需要根据数据，动态渲染的场景。即组件类型不确定（场景: 新闻排版不确定）

```html
<!-- 动态组件 -->
<component :is="NextTickName"/>
```

## 异步组件
- import() 函数
- 按需加载，异步加载大组件
```javascript
components: {
    FormDemo: () => import('../BaseUse/FormDemo.vue')
},
```

## keep-alive
> components/AdvancedUse/KeepAlive.vue

- 缓存组件
- 频繁切换，不需要重复渲染
- Vue 常见性能优化

## mixin（混合）
- 多个组件有相同的逻辑，抽离出来
- mixin 并不是完美的解决方案，会有一些问题
- Vue 3 剔除的Composition API 旨在解决这些问题

### mixin 的问题
- 变量来源不明确，不利于阅读
- 多mixin可能会造成命名冲突
- mixin 和组件可能出现多对多的关系，复杂度较高