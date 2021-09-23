<template>
  <div>
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>

    <keep-alive>
      <KeepAliveStateA v-if="state === 'A'"/>
      <KeepAliveStateB v-if="state === 'B'"/>
      <KeepAliveStateC v-if="state === 'C'"/>
    </keep-alive>
  </div>
</template>

<script>
import KeepAliveStateA from './KeepAliveStateA.vue'
import KeepAliveStateB from './KeepAliveStateB.vue'
import KeepAliveStateC from './KeepAliveStateC.vue'

export default {
  components: {
    KeepAliveStateA,
    KeepAliveStateB,
    KeepAliveStateC,
  },
  data() {
    return {
      state: 'A'
    }
  },
  methods: {
    changeState(val) {
      this.state = val
    }
  }
}
</script>

<style>

</style>