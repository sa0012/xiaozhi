import $ from '@/utils'

export default {
  name: 'repeaterThird',
  data() {
    return {
      showArrowLeft: true,
      showNext: false,
      showTitle: true
    }
  },
  computed: {
    data() {
    }
  },
  methods: {
    backPage() {
      window.history.back()
    },
    goPage (url) {
      this.$router.push(url)
    }
  },
  beforeMount() {
    
  },
  mounted() {
  },
  destroyed() {
  }
}
