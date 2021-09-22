<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      {{ item.title }}
      <button @click="deleteItem(item.id)">删除</button>
    </li>
  </ul>
</template>

<script>
import event from './event'

export default {
  props: {
    // prop 类型和默认值
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    deleteItem(id) {
      // 调用父组件的事件
      this.$emit('delete', id)
    },
    addTitleHandler(title) {
      console.log('on add title', title)
    }
  },
  created() {
    console.log('list created')
  },
  mounted() {
    console.log('list mounted')

    // 绑定自定义事件
    event.$on('onAddTitle', this.addTitleHandler)
  },
  beforeUpdate() {
    console.log('list beforeUpdate')
  },
  updated() {
    console.log('list updated')
  },
  beforeDestroy() {
    // 及时销毁，否则可能造成内存泄漏
    event.$off('onAddTitle', this.addTitleHandler)
  }
}
</script>

<style>

</style>