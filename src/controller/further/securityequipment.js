import $ from '@/utils'
// import add from '@/assets/images/further/add.png'
import doorlock from '@/assets/images/further/doorlock-icon.png'
import switchicon from '@/assets/images/further/switch-icon.png'
import bedroomswitch from '@/assets/images/further/bedroomswitch-icon.png'
import Infrared from '@/assets/images/further/Infrared-icon.png'
import icon21 from '@/assets/images/further/icon21.png'
import icon22 from '@/assets/images/further/icon22.png'

export default {
  name: 'securityequipment',
  data() {
    return {
      showNext: false,
      showArrowLeft: true,
      images: {
        // add: add
      },
      selected: '1',
      items: [
        {
          title: '门锁',
          userImg: doorlock,
          value: false
        }, {
          title: '红外卧室',
          userImg: Infrared,
          value: false
        }, {
          title: '红外卫生间',
          userImg: Infrared,
          value: false
        }, {
          title: '客厅插座',
          userImg: switchicon,
          value: false
        }, {
          title: '卧室灯开关',
          userImg: bedroomswitch,
          value: false
        }, {
          title: '门锁2',
          userImg: doorlock,
          value: false
        }
      ],
      otheritems: [
        {
          title: '烟雾传感',
          userImg: icon21,
          value: false
        }, {
          title: '煤气传感',
          userImg: icon22,
          value: false
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
