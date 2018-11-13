import $ from '@/utils'

export default {
  name: 'Register',
  data() {
    return {
      test: 'this is a home page'
    }
  },
  computed: {
    data() {
      return this.$store.state.Home
    }
  },
  methods: {
    toPage(url) {
      this.$router.push({path: url})
    }
  },
  beforeMount() {
    
  },
  mounted() {
    this.$store.dispatch('HOME_DATA', {msg: 'this is home store'})
  },
  destroyed() {
  }
}
