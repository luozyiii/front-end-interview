<template>
  <div>State: C</div>
</template>

<script>
export default {
  mounted() {
    console.log('C mounted')
  },
  beforeDestroy() {
    console.log('C beforeDestroy')
  }
}
</script>

<style>

</style>