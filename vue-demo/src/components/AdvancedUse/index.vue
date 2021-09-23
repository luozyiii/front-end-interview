<template>
  <div>
    <p>vue 高级特性</p>
    <hr>

    <!-- 自定义 v-model -->
    <!-- <p>{{ name }}</p>
    <CustomVModel v-model="name"/> -->

    <!-- $nextTick -->
    <!-- <NextTick /> -->

    <!-- slot -->
    <!-- <SlotDemo :url="website.url">
      {{ website.title }}
    </SlotDemo> -->

    <!-- 作用域插槽 -->
    <!-- <ScopedSlot :url="website.url">
      <template v-slot="slotProps">
        {{ slotProps.slotData.title }}
      </template>
    </ScopedSlot> -->

    <!-- 动态组件 -->
    <component :is="NextTickName"/>

    <!-- 异步加载组件 -->
    <FormDemo v-if="showFormDemo" />
    <button @click="showFormDemo = true">show form demo</button>

    <!-- keep-alive -->
    <KeepAlive />

    <!-- mixin -->
    <MixinDemo />
  </div>
</template>

<script>
// import CustomVModel from './CustomVModel.vue'
import NextTick from './NextTick.vue'
// import SlotDemo from './SlotDemo.vue'
// import ScopedSlot from './ScopedSlot.vue'
import KeepAlive from './KeepAlive'
import MixinDemo from './MixinDemo.vue'

export default {
  components: {
    // CustomVModel,
    NextTick,
    // SlotDemo,
    // ScopedSlot,
    FormDemo: () => import('../BaseUse/FormDemo.vue'), // 异步组件
    KeepAlive,
    MixinDemo,
  },
  data() {
    return {
      name: 'leslie',
      website: {
        url: 'http://baidu.com/',
        title: 'baidu',
        subTitle: '百度一下 你就知道'
      },
      NextTickName: 'NextTick',
      showFormDemo: false
    }
  }
}
</script>

<style>

</style>