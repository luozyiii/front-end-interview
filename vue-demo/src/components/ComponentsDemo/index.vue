<template>
  <div>
    <Input @add="addHandler"/>
    <list :list="list" @delete="deleteHandler"/>
  </div>
</template>

<script>
import Input from './Input.vue'
import List from './List.vue'

export default {
  components: {
    Input,
    List
  },
  data() {
    return {
      list: [
        {
          id: 'id-1',
          title: '标题1'
        }
      ]
    }
  },
  methods: {
    addHandler(title) {
      this.list.push({
        id: `id-${Date.now()}`,
        title
      })
    },
    deleteHandler(id) {
      this.list = this.list.filter(item => item.id !== id)
    }
  },
  created() {
    console.log('index created')
  },
  mounted() {
    console.log('index mounted')
  },
  beforeUpdate() {
    console.log('index beforeUpdate')
  },
  updated() {
    console.log('index updated')
  },
}
</script>

<style>

</style>