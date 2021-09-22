<template>
  <div>
    <p>name: <input v-model="name" /></p>
    <p>info: <input v-model="info.city" /></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'leslie',
      info: {
        city: '广州'
      }
    }
  },
  watch: {
    name(newVal, oldVal) {
      console.log('watch name', newVal, oldVal) // 值类型，可正常拿到oldVal 和 newVal
    },
    info: {
      handler(newVal, oldVal) {
        console.log('watch info', newVal, oldVal) // 引用类型，拿不到oldVal。因为指针相同, 此时的指针已经指向新的 newVal
      },
      deep: true // 深度监听
    }
  }
}
</script>

<style>

</style>