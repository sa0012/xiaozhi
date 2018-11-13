import $ from '@/utils'

export default {
  name: 'accountmanagement',
  data() {
    return {
      showNext: false
    }
  },
  computed: {
    data() {
      return this.$store.state.Home
    }
  },
  methods: {

  },
  beforeMount() {

  },
  mounted() {
  },
  destroyed() {
  }
}
