export default {
    name: 'layout',
    computed: {
      key() {
        return this.$route.path
      }
    }
}