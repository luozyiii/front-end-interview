<template>
  <a :href="url">
    <slot :slotData="website">
      {{ website.subTitle }}
    </slot>
  </a>
</template>

<script>
export default {
  props: ['url'],
  data() {
    return {
      website: {
        url: 'http://baidu2.com/',
        title: 'baidu2',
        subTitle: '百度2一下 你就知道'
      }
    }
  }
}
</script>

<style>

</style>