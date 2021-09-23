<template>
  <div>State: B</div>
</template>

<script>
export default {
  mounted() {
    console.log('B mounted')
  },
  beforeDestroy() {
    console.log('B beforeDestroy')
  }
}
</script>

<style>

</style>