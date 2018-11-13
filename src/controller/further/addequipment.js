import $ from '@/utils'
import security from '@/assets/images/further/security-icon.png'
import databackup from '@/assets/images/further/databackup-icon.png'
import share from '@/assets/images/further/share-icon.png'
import record from '@/assets/images/further/record-icon.png'
import upgrade from '@/assets/images/further/upgrade-icon.png'
import network from '@/assets/images/further/network-icon.png'

export default {
  name: 'addequipment',
  data() {
    return {
      showNext: false,
      items: [
        {
          title: '智能门锁',
          userImg: security,
          num: '9'
        }, {
          title: '门窗感应器',
          userImg: databackup,
          num: '8'
        }, {
          title: '人体探测器',
          userImg: share,
          num: '7'
        }
      ],
      otheritems: [
        {
          title: '烟雾报警器',
          userImg: security,
          num: '6'
        }, {
          title: '燃气报警器',
          userImg: databackup,
          num: '0'
        }, {
          title: '一氧化碳报警器',
          userImg: record,
          num: '5'
        }, {
          title: '水浸报警器',
          userImg: upgrade,
          num: '1'
        }, {
          title: 'PM2.5检测器',
          userImg: network,
          num: '4'
        }, {
          title: '其他设备',
          userImg: network,
          num: '2'
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
