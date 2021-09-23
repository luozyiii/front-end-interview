<template>
  <div>State: A</div>
</template>

<script>
export default {
  mounted() {
    console.log('A mounted')
  },
  beforeDestroy() {
    console.log('A beforeDestroy')
  }
}
</script>

<style>

</style>