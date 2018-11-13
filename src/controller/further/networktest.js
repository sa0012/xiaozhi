import $ from '@/utils'

export default {
  name: 'networktest',
  data() {
    return {
      showNext: false,
      items: [
        {
          title: '1.服务器域名解析测试',
          success: '成功率 : ',
          successrate: '--',
          delayed: '延时 : ',
          delayedrate: '--'
        }, {
          title: '2.服务器配置文件测试',
          success: '成功率 : ',
          successrate: '--',
          delayed: '延时 : ',
          delayedrate: '--'
        }, {
          title: '3.服务器通讯测试',
          success: '成功率 : ',
          successrate: '--',
          delayed: '延时 : ',
          delayedrate: '--'
        }
      ],
      equipmenttitle: '4.本地设备发现测试',
      equipment: '本地发现的设备数 : ',
      equipmentnum: 0,
      equipmentlist: [
        {
          title: '5.设备远程连接测试',
          name: '名称 : ',
          nameattribute: '--',
          success: '成功率 : ',
          successrate: '--',
          delayed: '延时 : ',
          delayedrate: '--'
        }, {
          title: '6.设备保持连接测试',
          name: '名称 : ',
          nameattribute: '--',
          success: '成功率 : ',
          successrate: '--',
          delayed: '延时 : ',
          delayedrate: '--'
        }
      ],
      basicdata: '7.基础设备',
      ServerIP: '--',
      PhoneIP: '--',
      PhoneID: '--'
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
