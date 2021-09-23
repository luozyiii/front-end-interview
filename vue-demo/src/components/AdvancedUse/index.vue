<template>
  <div>
    <p>vue 高级特性</p>
    <hr>

    <!-- 自定义 v-model -->
    <!-- <p>{{ name }}</p>
    <CustomVModel v-model="name"/> -->

    <!-- $nextTick -->
    <NextTick />
  </div>
</template>

<script>
// import CustomVModel from './CustomVModel.vue'
import NextTick from './NextTick.vue'

export default {
  components: {
    // CustomVModel,
    NextTick
  },
  data() {
    return {
      name: 'leslie'
    }
  }
}
</script>

<style>

</style>