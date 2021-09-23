<template>
  <div>
    <!-- 例如：vue 颜色选择 -->
    <input type="text" :value="text" @input="$emit('change', $event.target.value)">
    <!-- 
      1. 上面的 input 使用了 :value 而不是 v-model 
      2. 上面的 change 和 model.event 要对应起来 
    -->
  </div>
</template>

<script>

export default {
  model: {
    prop: 'text', // 对应props text
    event: 'change'
  },
  props: {
    text: String,
    default() {
      return ''
    }
  }
}
</script>

<style>

</style>