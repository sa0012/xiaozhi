import $ from '@/utils'
import property1 from '@/assets/images/equipment/property1.gif'
import property2 from '@/assets/images/equipment/property2.gif'
import property3 from '@/assets/images/equipment/property3.gif'
import property4 from '@/assets/images/equipment/property4.gif'
import property5 from '@/assets/images/equipment/property5.gif'
import property6 from '@/assets/images/equipment/property6.gif'
import property7 from '@/assets/images/equipment/property7.gif'
import property8 from '@/assets/images/equipment/property8.gif'
import property9 from '@/assets/images/equipment/property9.gif'
import property10 from '@/assets/images/equipment/property10.gif'
import property11 from '@/assets/images/equipment/property11.gif'
import property12 from '@/assets/images/equipment/property12.gif'

export default {
  name: 'equipmentProperty',
  data() {
    return {
      lists: [{
        name: '小智主机',
        detail: '',
        images: property1
      }, {
        name: '关联账号',
        detail: '已关联',
        images: property2
      }, {
        name: 'WiFi设置',
        detail: 'Host_Keting',
        images: property3
      }, {
        name: '外网设置',
        detail: '桥接',
        images: property4
      }, {
        name: 'IP地址',
        detail: '192.168.8.104',
        images: property5
      }, {
        name: 'MAC地址',
        detail: 'C8:EE:A6:2C:9F:1E',
        images: property6
      }, {
        name: '开放设备',
        detail: '',
        images: property7
      }, {
        name: '推送语言',
        detail: '',
        images: property8
      }, {
        name: '主机时间',
        detail: '16：15',
        images: property9
      }, {
        name: '固件版本',
        detail: '8.63.31',
        images: property10
      }, {
        name: '温度',
        detail: '25.5℃',
        images: property11
      }, {
        name: '湿度',
        detail: '52%',
        images: property12
      }],
      show: false,
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
      console.log(1)
      window.history.back()
    },
    showDialog(item) {
      if (item.name === '小智主机') {
        this.show = !this.show
      } else if (item.name === '关联账号') {
        this.$router.push('/equipment/relative')
      }
    },
    hideDialog () {
      this.show = !this.show
    }
  },
  beforeMount() {
    
  },
  mounted() {
  },
  destroyed() {
  }
}
