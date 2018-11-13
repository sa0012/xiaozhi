import $ from '@/utils'
import userImg from '@/assets/images/further/user.png'
import databackup from '@/assets/images/further/databackup-icon.png'
import backup from '@/assets/images/further/backup-icon.png'

import share from '@/assets/images/further/share-icon.png'
import record from '@/assets/images/further/record-icon.png'
import upgrade from '@/assets/images/further/upgrade-icon.png'
import network from '@/assets/images/further/network-icon.png'
import aboutus from '@/assets/images/further/aboutus-icon.png'

export default {
  name: 'index',
  data() {
    return {
      showNext: false,
      userID: '13120933861',
      userImg: userImg,
      value: false,
      items: [
        {
          title: '安防',
          link: '/further/security',
          userImg: databackup
        }, {
          title: '数据备份',
          link: '/further/databackup',
          userImg: backup
        }, {
          title: '数据分享',
          link: '/further/datasharing',
          userImg: share
        }, {
          title: '消息记录',
          link: '/further/messageRecord',
          userImg: record
        }, {
          title: '固件升级管理',
          link: '/',
          userImg: upgrade
        }, {
          title: '网络测试',
          link: '/further/networktest',
          userImg: network
        }, {
          title: '关于我们',
          link: '/further/aboutus',
          userImg: aboutus
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
