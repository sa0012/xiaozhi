import $ from '@/utils'
import macIcon1 from '../../assets/images/further/machine1.png'
import macIcon2 from '../../assets/images/further/machine2.png'
import macIcon3 from '../../assets/images/further/machine3.png'

export default {
  name: 'security',
  data() {
    return {
      showBetter: false,
      title: '安防-展厅客厅',
      titlestatus: '已布防',
      rangeValue: 0,
      rangemoonValue: 0,
      navbar: [
        {
          title: '网关1',
          icon: macIcon1,
          url: '/'
        },
        {
          title: '网关2',
          icon: macIcon2,
          url: '/'
        },
        {
          title: '网关3',
          icon: macIcon3,
          url: '/'
        }
      ]
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
