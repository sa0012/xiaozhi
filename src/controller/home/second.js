import $ from '@/utils'

export default {
  name: 'Second',
  data() {
    return {
      test: 'this is a second page'
    }
  },
  computed: {
    data() {
      return this.$store.state.Home.Data
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
  },
  destroyed() {
  }
}
