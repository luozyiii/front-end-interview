export default {
  data() {
    return {
      city: '广州'
    }
  },
  methods: {
    showName() {
      console.log(this.name)
    }
  },
  mounted() {
    console.log('mixin mounted', this.name)
  }
}