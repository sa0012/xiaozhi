import $ from '@/utils'
import Mint from 'mint-ui'

export default {
  name: 'Scene',
  data() {
    return {
      showNext: false,
      selectArr: [
        {
          id: 1,
          title: '温度'
        },
        {
          id: 2,
          title: '湿度'
        }
      ],
      modelSelect: 1
    }
  },
  computed: {
    data() {
      return this.$store.state.Home
    }
  },
  methods: {
    toPage(url) {
      this.$router.push({
        path: url
      })
    },
  },
  beforeMount() {

  },
  mounted() {
    this.$store.dispatch('HOME_DATA', {
      msg: 'this is home store'
    })

  },

  destroyed() {}
}