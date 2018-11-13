import $ from '@/utils'
import Mint from 'mint-ui'
import close from '../../../assets/images/home/select2.png';
import right from '../../../assets/images/home/right.png';

export default {
  name: 'AddCopy',
  data() {
    return {
      roomList: [
        {
          title: '空调遥控',
          closeUrl: close,
          rightUrl: right,
          selected: false
        },
        {
          title: '客厅遥控',
          closeUrl: close,
          rightUrl: right,
          selected: true
        },
        {
          title: '卧室遥控',
          closeUrl: close,
          rightUrl: right,
          selected: false
        }
      ],
      showNext: false
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
    handleChange(index) {
      console.log(index)
    }
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