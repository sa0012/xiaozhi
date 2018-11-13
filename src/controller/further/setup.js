import $ from '@/utils'

export default {
  name: 'setup',
  data() {
    return {
      rangeValue: 0,
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
