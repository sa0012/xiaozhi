import $ from '@/utils'

export default {
  name: 'aboutus',
  data() {
    return {
      showNext: false,
      content: '此段内容是获取出来的'
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
